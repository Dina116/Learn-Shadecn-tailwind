export function ConvertFloatNumbers(
  num: number,
  digitsAfterZero?: number,
): number {
  if (Number.isInteger(num)) {
    return num;
  }
  return Number(Number(num).toFixed(digitsAfterZero || 2));
}

export function formatCurrency(value: number): string {
  // Ensure that the value is a valid number
  if (Number.isNaN(value)) {
    return 'ج.م 0';
  }
  const rounded = Math.round(value);
  // Format the number with commas as thousand separator
  const formattedValue = rounded.toLocaleString('en-US');
  // Return the value with ج.م prefix
  return `${formattedValue} ج.م `;
}
