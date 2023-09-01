export default function handleTime(seconds: number) {
  seconds = Number(seconds);
  let time = (Date.now() / 1000)
  const diff = time - seconds
  const d = Math.floor((diff % (3600 * 24)) / 86400);
  const h = Math.floor(((diff % (3600 * 24)) % 86400) / 3600);
  if (d < 1) {
    return h > 1 ? h + " hours ago" : "just now";
  }
  if (d === 1) {
    return "one day ago";
  }
  if (d > 1 && d <= 31) {
    return d + "days ago";
  }
  return "+30 days";
}
