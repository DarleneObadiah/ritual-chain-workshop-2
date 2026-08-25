export type MarketData = {
  id: bigint;
  question: string;
  yesCount: bigint;
  noCount: bigint;
  resolved: boolean;
  result?: "YES" | "NO";
};

export function totalPredictions(
  market: MarketData,
): bigint {
  return (
    market.yesCount +
    market.noCount
  );
}

export function leadingSide(
  market: MarketData,
): "YES" | "NO" | "TIE" {
  if (
    market.yesCount ===
    market.noCount
  ) {
    return "TIE";
  }

  return market.yesCount >
    market.noCount
    ? "YES"
    : "NO";
}

export function resultText(
  market: MarketData,
): string {
  if (!market.resolved) {
    return "Not resolved";
  }

  if (!market.result) {
    return "Resolved without result";
  }

  return `Result: ${market.result}`;
}

export function summaryLines(
  market: MarketData,
): string[] {
  return [
    `Market #${market.id}`,
    market.question,
    `YES predictions: ${market.yesCount}`,
    `NO predictions: ${market.noCount}`,
    `Total predictions: ${totalPredictions(market)}`,
    `Leading side: ${leadingSide(market)}`,
    resultText(market),
  ];
}

export function marketSummary(
  market: MarketData,
): string {
  return summaryLines(market)
    .join("\n");
}

export function isBalanced(
  market: MarketData,
): boolean {
  return (
    market.yesCount ===
    market.noCount
  );
}
