export default function ShortenByCharacters({
  text,
  limit = 80,
}: {
  text: string;
  limit?: number;
}): string {
  if (text.length <= limit) return text;
  return text.slice(0, limit).trimEnd() + ".......";
}
