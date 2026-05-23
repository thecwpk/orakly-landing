import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const BRAND_MARK_PATH = join(process.cwd(), "public/brand/orakly-mark-dark.PNG");
const MARK_PLATE = "#000000";

async function loadBrandMarkDataUrl() {
  const buffer = await readFile(BRAND_MARK_PATH);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export async function createBrandIconResponse(width: number, height: number, markSize: number) {
  const dataUrl = await loadBrandMarkDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: MARK_PLATE,
        }}
      >
        <img src={dataUrl} width={markSize} height={markSize} alt="" style={{ objectFit: "contain" }} />
      </div>
    ),
    { width, height },
  );
}
