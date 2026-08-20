import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "radial-gradient(circle at 18% 18%, #0ea5e9 0, transparent 28%), radial-gradient(circle at 82% 16%, #8b5cf6 0, transparent 30%), #020617",
          color: "white"
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#7dd3fc", textTransform: "uppercase" }}>Full Stack Developer / AI Engineer</div>
        <div style={{ marginTop: 28, fontSize: 84, fontWeight: 700, lineHeight: 0.95 }}>{siteConfig.name}</div>
        <div style={{ marginTop: 32, maxWidth: 850, fontSize: 32, color: "#cbd5e1", lineHeight: 1.35 }}>Building scalable web applications and AI-powered products with cinematic interfaces.</div>
      </div>
    ),
    size
  );
}
