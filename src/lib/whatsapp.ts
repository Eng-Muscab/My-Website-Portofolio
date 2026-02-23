export function getWhatsAppUrl(rawNumber: string) {
  const digits = rawNumber.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  // If a local Somali mobile number is provided (e.g. 612374744), prepend country code.
  const normalized = digits.length === 9 && digits.startsWith("6") ? `252${digits}` : digits;

  return `https://wa.me/${normalized}`;
}
