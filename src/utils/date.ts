/**
 * Formats a date string to a human-readable format
 * @param dateString - The date string to format
 * @returns Formatted date string (e.g., "January 1, 2023")
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
} 