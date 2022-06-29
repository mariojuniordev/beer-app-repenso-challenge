export function abvFormatter(abv: number | undefined) {
  if (!abv) return;

  const formattedAbv = `${abv.toFixed(2)}%`;

  return formattedAbv;
}

export function textShortener(text: string) {
  if (text.length > 160) {
    const shortText = `${text.slice(0, 160)}...`;

    return shortText;
  }

  return text;
}
