import {
  marketSummary,
  leadingSide,
  totalPredictions,
} from "../utils/market-summary";

const markets = [
  {
    id: 1n,
    question:
      "Will ETH reach $3000?",
    yesCount: 15n,
    noCount: 8n,
    resolved: false,
  },
  {
    id: 2n,
    question:
      "Will BTC stay above $60000?",
    yesCount: 10n,
    noCount: 10n,
    resolved: true,
    result: "YES" as const,
  },
  {
    id: 3n,
    question:
      "Will the target be reached?",
    yesCount: 4n,
    noCount: 12n,
    resolved: true,
    result: "NO" as const,
  },
];

for (const market of markets) {
  console.log(
    marketSummary(market),
  );

  console.log(
    "Total:",
    totalPredictions(market)
      .toString(),
  );

  console.log(
    "Leader:",
    leadingSide(market),
  );

  console.log(
    "======================",
  );
}
