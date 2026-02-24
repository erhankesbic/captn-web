import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Capt'n – Dein KI-Personal-Trainer & Ernährungsberater";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0071e3 0%, #5856d6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Title */}
        <div
          style={{
            color: "white",
            fontSize: 100,
            fontWeight: 800,
            letterSpacing: "-5px",
            lineHeight: "1",
          }}
        >
          Capt&apos;n
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: 36,
            fontWeight: 500,
            textAlign: "center",
            maxWidth: "780px",
            lineHeight: "1.45",
            marginTop: "28px",
          }}
        >
          Dein KI-Personal-Trainer &amp; Ernährungsberater
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: "44px",
            color: "rgba(255,255,255,0.75)",
            fontSize: "22px",
            fontWeight: 600,
            background: "rgba(255,255,255,0.14)",
            borderRadius: "50px",
            padding: "14px 40px",
            border: "1px solid rgba(255,255,255,0.22)",
            letterSpacing: "0.02em",
          }}
        >
          Jetzt verfügbar · iOS · DACH · Training + Ernährung
        </div>
      </div>
    ),
    { ...size }
  );
}
