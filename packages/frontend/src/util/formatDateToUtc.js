export default function formatDateToUtc(date) {
  const formattedDate = new Date(date)
    .toLocaleString('pt-PT', { timeZone: 'UTC' })
    .split(',')[0];

  return formattedDate;
}
