import { NextResponse } from "next/server";
import { isCloudinaryConfigured, uploadBuffer } from "@/lib/cloudinary";

export const runtime = "nodejs";

const ALLOWED = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const MAX_BYTES = 15 * 1024 * 1024; // 15 MB

export async function POST(request: Request) {
  if (!isCloudinaryConfigured()) {
    return NextResponse.json(
      { success: false, message: "File uploads are not configured." },
      { status: 503 }
    );
  }

  let file: FormDataEntryValue | null;
  try {
    const form = await request.formData();
    file = form.get("file");
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid upload request." },
      { status: 400 }
    );
  }

  if (!(file instanceof File)) {
    return NextResponse.json(
      { success: false, message: "No file provided." },
      { status: 400 }
    );
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json(
      { success: false, message: "Unsupported file type. Use JPG, PNG, WEBP, PDF or DOCX." },
      { status: 415 }
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json(
      { success: false, message: "File exceeds the 15 MB limit." },
      { status: 413 }
    );
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const url = await uploadBuffer(buffer, file.name);
    return NextResponse.json({ success: true, url });
  } catch (err) {
    console.error("[upload] Cloudinary error:", err);
    return NextResponse.json(
      { success: false, message: "Upload failed. Please try again." },
      { status: 502 }
    );
  }
}
