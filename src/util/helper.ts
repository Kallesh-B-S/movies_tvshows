import { Request } from "express";

export function extractQueryParams(req: Request): Record<string, string | string[]> | null {
  const queryEntries = Object.entries(req.query);

  if (queryEntries.length === 0) {
    return null;
  }

  const queryObject: Record<string, string | string[]> = {};

  for (const [key, value] of queryEntries) {
    if (value === undefined) continue;

    const lowerKey = key.toLowerCase();

    if (Array.isArray(value)) {
      queryObject[lowerKey] = value.map(v => String(v));
    } else {
      queryObject[lowerKey] = String(value);
    }
  }

  return Object.keys(queryObject).length > 0 ? queryObject : null;
}
