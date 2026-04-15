// hooks/usePrice.js
import { useMemo } from "react";
import createPricesMap from "../utils/createPricesMap";

export function usePricesMap(productPrices, preferredCurrency = "$") {
  return useMemo(() => {
    if (!productPrices?.length) return null;

    const pricesMap = createPricesMap(productPrices);
    const amount = pricesMap[preferredCurrency] ?? Object.values(pricesMap)[0];

    return {
      amount,
      currency:
        preferredCurrency in pricesMap
          ? preferredCurrency
          : Object.keys(pricesMap)[0],
      pricesMap, // optional, if you still need it
    };
  }, [productPrices, preferredCurrency]);
}
