// utils/countdown.ts
export function getCountdown(targetDate: string): string {
  const now = new Date().getTime();
  const countdownDate = new Date(targetDate).getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    return "Expired";
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days} day(s) ${hours} hr ${minutes} min ${seconds} sec`;
}
