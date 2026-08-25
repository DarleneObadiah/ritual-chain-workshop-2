import { expect } from "chai";

import {
  totalPredictions,
  leadingSide,
  resultText,
  summaryLines,
  marketSummary,
  isBalanced,
} from "../utils/market-summary";

describe("market summary", function () {
  const market = {
    id: 8n,
    question:
      "Will ETH reach the target?",
    yesCount: 12n,
    noCount: 7n,
    resolved: false,
  };

  it("calculates total predictions", function () {
    expect(
      totalPredictions(market),
    ).to.equal(19n);
  });

  it("finds the leading side", function () {
    expect(
      leadingSide(market),
    ).to.equal("YES");
  });

  it("detects a tie", function () {
    expect(
      leadingSide({
        ...market,
        yesCount: 5n,
        noCount: 5n,
      }),
    ).to.equal("TIE");
  });

  it("shows unresolved status", function () {
    expect(
      resultText(market),
    ).to.equal("Not resolved");
  });

  it("shows the final result", function () {
    expect(
      resultText({
        ...market,
        resolved: true,
        result: "YES",
      }),
    ).to.equal("Result: YES");
  });

  it("creates summary lines", function () {
    const lines =
      summaryLines(market);

    expect(lines)
      .to.have.length(7);

    expect(lines[0])
      .to.equal("Market #8");
  });

  it("creates a readable summary", function () {
    const summary =
      marketSummary(market);

    expect(summary)
      .to.contain(
        "Will ETH reach the target?",
      );

    expect(summary)
      .to.contain(
        "Total predictions: 19",
      );
  });

  it("detects balanced predictions", function () {
    expect(
      isBalanced({
        ...market,
        yesCount: 10n,
        noCount: 10n,
      }),
    ).to.equal(true);
  });
});
