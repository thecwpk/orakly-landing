import { createBrandIconResponse } from "@/lib/brand-icon";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default async function Icon() {
  return createBrandIconResponse(size.width, size.height, 42);
}
