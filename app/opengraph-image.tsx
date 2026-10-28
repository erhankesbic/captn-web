import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Capt'n – Dein Coach. Immer an Bord.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [icon, phone] = await Promise.all([
    readFile(join(process.cwd(), "app/icon.png")),
    readFile(join(process.cwd(), "assets/og-phone.png")),
  ]);
  const src = (buf: Buffer) => `data:image/png;base64,${buf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(900px 500px at 75% 0%, rgba(40,232,196,0.28), transparent 60%), #08090e",
          fontFamily: "system-ui, sans-serif",
          color: "#f4f6f8",
          padding: "70px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img src={src(icon)} width={72} height={72} style={{ borderRadius: 18 }} alt="" />
            <div style={{ fontSize: 40, fontWeight: 900 }}>Capt&apos;n</div>
          </div>
          <div style={{ marginTop: 40, fontSize: 76, fontWeight: 900, lineHeight: 1.02, letterSpacing: -2 }}>
            Dein Coach.
          </div>
          <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.02, letterSpacing: -2, color: "#28e8c4" }}>
            Immer an Bord.
          </div>
          <div style={{ marginTop: 30, fontSize: 28, color: "rgba(255,255,255,0.72)" }}>
            KI-Personal-Trainer für iPhone & Apple Watch
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={src(phone)}
            width={300}
            height={685}
            style={{ borderRadius: 44, border: "10px solid #1b1f25", marginTop: 160 }}
            alt=""
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
