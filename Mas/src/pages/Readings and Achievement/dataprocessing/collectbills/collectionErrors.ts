export function extractInvoiceNumber(message: string): string | undefined {
  const match = message.match(/\d+/);
  return match ? match[0] : undefined;
}

export function buildErrorEntry(errorMessage: string) {
  const now = new Date();

  const timestamp = now.toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return {
    message: errorMessage,
    timestamp,
    payment_no: extractInvoiceNumber(errorMessage),
  };
}
