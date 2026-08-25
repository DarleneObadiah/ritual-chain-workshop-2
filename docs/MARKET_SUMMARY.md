# Market Summary

While reading the workshop I noticed that the raw market data is useful
for the contract, but it is not necessarily the easiest format for a
person to read.

I made a small summary helper around the data.

For me the useful fields are:

- question
- number of YES predictions
- number of NO predictions
- total predictions
- current leading side
- final result

The summary is intentionally separate from the contract.

I see it more as something a frontend or a debugging script could use.

It also helped me understand which pieces of market state I actually
care about when looking at one market.
