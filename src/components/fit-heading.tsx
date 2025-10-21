interface FitHeadingProps {
  text: string;
  maxFontPx?: number;
  boxWidthPx?: number;
  kAvg?: number;
  minFontPx?: number;
}

export const FitHeading = ({
  text,
  maxFontPx = 42,
  boxWidthPx = 320,
  kAvg = 0.55,
  minFontPx = 14,
}: FitHeadingProps) => {
  const tokens = text.split(/[\s-]+/).filter(Boolean);
  const longest = tokens.reduce((m, t) => Math.max(m, t.length), 0);

  const estimatedToFit = Math.floor(boxWidthPx / (Math.max(1, longest) * kAvg));
  const fontSize = Math.max(minFontPx, Math.min(maxFontPx, estimatedToFit));

  return (
    <h1
      style={{
        fontSize: `${fontSize}px`,
        lineHeight: 1.1,
        margin: 0,
        whiteSpace: "normal",
        textWrap: "balance",
        overflow: "hidden",
      }}
    >
      {text}
    </h1>
  );
};
