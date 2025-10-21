// File: env.ts (Đã sửa)

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-17'

// Ghi cố định giá trị đã có trong .env.local
export const dataset = 'production'

// Ghi cố định giá trị đã có trong .env.local
export const projectId = 'n92vxkzc'


/*
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}
*/