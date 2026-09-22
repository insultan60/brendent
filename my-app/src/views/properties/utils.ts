export function formatMoney(value: number): string {
  return `$${value.toLocaleString('en-US')}`;
}

/** Parse a controlled text input into a number, treating blank as "no limit". */
export function num(value: string): number | null {
  if (value === undefined || value === null) return null;
  const trimmed = String(value).trim();
  if (trimmed === '') return null;
  const parsed = Number(trimmed);
  return Number.isNaN(parsed) ? null : parsed;
}