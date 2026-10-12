"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./QuoteWizard.module.css";

type CategoryValue =
  | "security-uniforms"
  | "premium-formal"
  | "premium-tshirts"
  | "custom-manufacturing";

const categoryOptions: { value: CategoryValue; label: string; hint: string }[] = [
  { value: "security-uniforms", label: "Security Uniforms", hint: "Guard shirts, duty sets, officer wear" },
  { value: "premium-formal", label: "Premium Formal", hint: "Corporate shirts & trousers" },
  { value: "premium-tshirts", label: "Premium T-Shirts", hint: "180–200 GSM knits & polos" },
  { value: "custom-manufacturing", label: "Custom / Contract", hint: "Bulk production to your tech pack" },
];

const quantityTiers: { label: string; value: number }[] = [
  { label: "50 – 100", value: 100 },
  { label: "100 – 500", value: 500 },
  { label: "500 – 2,000", value: 2000 },
  { label: "2,000+", value: 2500 },
];

const itemToCategory: Record<string, CategoryValue> = {
  "security-shirt": "security-uniforms",
  "premium-formal": "premium-formal",
  "premium-tshirt": "premium-tshirts",
};

const steps = [
  { title: "Contact & Company", hint: "Who we'll send the quotation to" },
  { title: "Category & Quantity", hint: "What you need and how many" },
  { title: "Technical Preferences", hint: "Fabric, finish and timeline" },
  { title: "Tech Pack & Files", hint: "Optional specs and artwork" },
  { title: "Review & Submit", hint: "Confirm and send" },
];

interface FormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  productCategory: CategoryValue | "";
  productSku: string;
  estimatedQuantity: string;
  fabricSpecifications: string;
  gsm: string;
  targetDate: string;
  customizationNotes: string;
}

const empty: FormState = {
  fullName: "", companyName: "", email: "", phone: "", city: "", country: "India",
  productCategory: "", productSku: "", estimatedQuantity: "", fabricSpecifications: "",
  gsm: "", targetDate: "", customizationNotes: "",
};

export default function QuoteWizard() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(empty);
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [refId, setRefId] = useState("");

  // Smart pre-fill from URL params.
  useEffect(() => {
    const item = params.get("item");
    const type = params.get("type");
    const sku = params.get("sku");
    const gsm = params.get("gsm");
    setForm((f) => ({
      ...f,
      productCategory: type ? "custom-manufacturing" : (item && itemToCategory[item]) || f.productCategory,
      productSku: sku ?? f.productSku,
      gsm: gsm ?? f.gsm,
    }));
  }, [params]);

  const prefilled = useMemo(
    () => Boolean(params.get("item") || params.get("type") || params.get("sku")),
    [params]
  );

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  function validateStep(s: number): boolean {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (form.fullName.trim().length < 2) e.fullName = "Please enter your name.";
      if (form.companyName.trim().length < 2) e.companyName = "Company / institution is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
      if (form.phone.trim().length < 7) e.phone = "Enter a valid phone number.";
    }
    if (s === 1) {
      if (!form.productCategory) e.productCategory = "Select a category.";
      const q = Number(form.estimatedQuantity);
      if (!q || q < 10) e.estimatedQuantity = "Minimum order quantity is 10 units.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function addFiles(list: FileList | null) {
    if (!list) return;
    const allowed = [
      "image/jpeg", "image/png", "image/webp", "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const max = 15 * 1024 * 1024;
    const incoming = Array.from(list).filter((f) => allowed.includes(f.type) && f.size <= max);
    setFiles((cur) => [...cur, ...incoming].slice(0, 8));
  }

  async function submit() {
    if (!validateStep(0) || !validateStep(1)) {
      setStep(0);
      return;
    }
    setSubmitting(true);
    setSubmitError("");
    try {
      // 1) Upload any attachments to Cloudinary via /api/upload.
      const attachmentUrls: string[] = [];
      for (const file of files) {
        const fd = new FormData();
        fd.append("file", file);
        const up = await fetch("/api/upload", { method: "POST", body: fd });
        if (up.ok) {
          const data = await up.json();
          if (data?.url) attachmentUrls.push(data.url);
        }
      }

      // 2) Assemble schema-compliant payload.
      const specBits = [
        form.gsm ? `GSM: ${form.gsm}` : "",
        form.fabricSpecifications.trim(),
      ].filter(Boolean).join(" · ");

      const payload = {
        fullName: form.fullName.trim(),
        companyName: form.companyName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        country: [form.city.trim(), form.country.trim()].filter(Boolean).join(", "),
        productCategory: form.productCategory,
        productSku: form.productSku || undefined,
        estimatedQuantity: Number(form.estimatedQuantity),
        targetDate: form.targetDate || undefined,
        fabricSpecifications: specBits || undefined,
        customizationNotes: form.customizationNotes.trim() || undefined,
        attachmentUrls,
      };

      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "We couldn't submit your request. Please try again or email us directly.");
      }
      setRefId(data?.data?.referenceId || "PRL-QUOTE");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (refId) {
    return (
      <div className={styles.panel}>
        <div className={styles.success}>
          <div className={styles.successIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h2 style={{ color: "var(--maroon)" }}>Quote request submitted</h2>
          <p style={{ color: "var(--muted)", maxWidth: "34rem" }}>
            Thank you, {form.fullName.split(" ")[0] || "there"}. A confirmation
            has been sent to <strong>{form.email}</strong>, and our sales team
            will respond with a tailored quotation shortly.
          </p>
          <span className={styles.ref}>Reference: {refId}</span>
          <a href="/" className="btn btn-ghost">Back to Home</a>
        </div>
      </div>
    );
  }

  const catLabel = categoryOptions.find((c) => c.value === form.productCategory)?.label ?? "—";

  return (
    <div className={styles.wrap}>
      <ol className={styles.rail}>
        {steps.map((s, i) => (
          <li
            key={s.title}
            className={styles.railItem}
            data-state={i === step ? "active" : i < step ? "done" : "todo"}
          >
            <span className={styles.bullet}>{i < step ? "✓" : i + 1}</span>
            <span className={styles.railText}>
              <strong>{s.title}</strong>
              <span>{s.hint}</span>
            </span>
          </li>
        ))}
      </ol>

      <div className={styles.panel}>
        <h2 className={styles.stepTitle}>{steps[step].title}</h2>
        <p className={styles.stepHint}>{steps[step].hint}</p>

        {step === 0 && prefilled && (
          <div className={`${styles.banner} ${styles.bannerInfo}`}>
            We&apos;ve pre-selected your product from the page you came from —
            just add your contact details.
          </div>
        )}

        {/* Step 1 */}
        {step === 0 && (
          <div className={styles.grid2}>
            <Field label="Full Name" error={errors.fullName}>
              <input value={form.fullName} onChange={(e) => set("fullName", e.target.value)} autoComplete="name" />
            </Field>
            <Field label="Business / Institution" error={errors.companyName}>
              <input value={form.companyName} onChange={(e) => set("companyName", e.target.value)} autoComplete="organization" />
            </Field>
            <Field label="Email" error={errors.email}>
              <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input value={form.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" />
            </Field>
            <Field label="City">
              <input value={form.city} onChange={(e) => set("city", e.target.value)} autoComplete="address-level2" />
            </Field>
            <Field label="Country">
              <input value={form.country} onChange={(e) => set("country", e.target.value)} autoComplete="country-name" />
            </Field>
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <div>
              <label style={{ marginBottom: "0.6rem", display: "block" }}>Garment Category</label>
              <div className={styles.options}>
                {categoryOptions.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    className={styles.option}
                    aria-pressed={form.productCategory === c.value}
                    onClick={() => set("productCategory", c.value)}
                  >
                    <strong>{c.label}</strong>
                    <span>{c.hint}</span>
                  </button>
                ))}
              </div>
              {errors.productCategory && <p className={styles.err}>{errors.productCategory}</p>}
            </div>

            <div>
              <label style={{ marginBottom: "0.6rem", display: "block" }}>Estimated Quantity</label>
              <div className={styles.options}>
                {quantityTiers.map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    className={styles.option}
                    aria-pressed={Number(form.estimatedQuantity) === t.value}
                    onClick={() => set("estimatedQuantity", String(t.value))}
                  >
                    <strong>{t.label}</strong>
                    <span>pieces</span>
                  </button>
                ))}
              </div>
              <div style={{ marginTop: "0.9rem", maxWidth: "16rem" }}>
                <Field label="Or enter an exact quantity" error={errors.estimatedQuantity}>
                  <input
                    type="number"
                    min={10}
                    value={form.estimatedQuantity}
                    onChange={(e) => set("estimatedQuantity", e.target.value)}
                  />
                </Field>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div className={styles.grid2}>
            <Field label="Fabric / Blend Preference" wide>
              <input
                placeholder="e.g. Poly-Cotton 65/35, Giza cotton, combed cotton…"
                value={form.fabricSpecifications}
                onChange={(e) => set("fabricSpecifications", e.target.value)}
              />
            </Field>
            {form.productCategory === "premium-tshirts" && (
              <Field label="GSM Preference">
                <select value={form.gsm} onChange={(e) => set("gsm", e.target.value)}>
                  <option value="">No preference</option>
                  <option value="180">180 GSM</option>
                  <option value="200">200 GSM</option>
                  <option value="180-200">180–200 GSM</option>
                </select>
              </Field>
            )}
            <Field label="Target Delivery Date">
              <input type="date" value={form.targetDate} onChange={(e) => set("targetDate", e.target.value)} />
            </Field>
            <Field label="Embroidery / Printing & Other Notes" wide>
              <textarea
                rows={4}
                placeholder="Logo embroidery, screen/DTF print, size breakdown, colours…"
                value={form.customizationNotes}
                onChange={(e) => set("customizationNotes", e.target.value)}
              />
            </Field>
          </div>
        )}

        {/* Step 4 */}
        {step === 3 && (
          <div>
            <div
              className={styles.drop}
              data-drag={dragging}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
              onClick={() => document.getElementById("file-input")?.click()}
            >
              <p><strong>Drag &amp; drop</strong> tech packs, sketches or logos here</p>
              <p style={{ fontSize: "0.88rem" }}>JPG, PNG, WEBP, PDF or DOCX · up to 15 MB each</p>
              <input
                id="file-input"
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp,application/pdf,.docx"
                style={{ display: "none" }}
                onChange={(e) => addFiles(e.target.files)}
              />
            </div>
            {files.length > 0 && (
              <div className={styles.files}>
                {files.map((f, i) => (
                  <div className={styles.fileRow} key={`${f.name}-${i}`}>
                    <span>{f.name} · {(f.size / 1024 / 1024).toFixed(1)} MB</span>
                    <button type="button" onClick={() => setFiles((cur) => cur.filter((_, j) => j !== i))}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <p className="form-note" style={{ marginTop: "1rem" }}>
              Attachments are optional — you can also send them later by email.
            </p>
          </div>
        )}

        {/* Step 5 */}
        {step === 4 && (
          <div>
            {submitError && (
              <div className={`${styles.banner}`} style={{ background: "#fae7e4", border: "1px solid #a3261b", color: "#a3261b" }}>
                {submitError}
              </div>
            )}
            <dl className={styles.review}>
              <Row label="Name" value={form.fullName} />
              <Row label="Company" value={form.companyName} />
              <Row label="Email" value={form.email} />
              <Row label="Phone" value={form.phone} />
              <Row label="Location" value={[form.city, form.country].filter(Boolean).join(", ")} />
              <Row label="Category" value={catLabel} />
              {form.productSku && <Row label="Product SKU" value={form.productSku} />}
              <Row label="Quantity" value={form.estimatedQuantity ? `${form.estimatedQuantity} pcs` : "—"} />
              {form.gsm && <Row label="GSM" value={form.gsm} />}
              {form.fabricSpecifications && <Row label="Fabric" value={form.fabricSpecifications} />}
              {form.targetDate && <Row label="Target Date" value={form.targetDate} />}
              {form.customizationNotes && <Row label="Notes" value={form.customizationNotes} />}
              <Row label="Attachments" value={files.length ? `${files.length} file(s)` : "None"} />
            </dl>
          </div>
        )}

        <div className={styles.nav}>
          <button type="button" className="btn btn-ghost btn-small" onClick={back} disabled={step === 0} aria-disabled={step === 0}>
            Back
          </button>
          {step < steps.length - 1 ? (
            <button type="button" className="btn" onClick={next}>Continue</button>
          ) : (
            <button type="button" className="btn btn-gold" onClick={submit} disabled={submitting} aria-disabled={submitting}>
              {submitting ? "Submitting…" : "Submit Quote Request"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label, error, wide, children,
}: {
  label: string; error?: string; wide?: boolean; children: React.ReactNode;
}) {
  return (
    <div className={`field ${wide ? styles.wide : ""}`}>
      <label>{label}</label>
      {children}
      {error && <span className={styles.err}>{error}</span>}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.reviewRow}>
      <dt>{label}</dt>
      <dd>{value || "—"}</dd>
    </div>
  );
}
