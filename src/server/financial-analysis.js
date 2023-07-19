import getFieldValue from "@/util/getFieldValue";
import { mappedAccountingFields } from "@/util/accountingFields";
import safeDivide from "@/util/safeDivide";

export default function createFinancialAnalysis(accounting) {
  return Object.keys(accounting).reduce((acc, year) => {
    const currentYear = accounting[year];

    // Liquidity

    const currentAssets = getFieldValue(
      currentYear,
      mappedAccountingFields["Omløpsmidler"]
    );

    const currentLiabilities = getFieldValue(
      currentYear,
      mappedAccountingFields["Kortsiktig gjeld"]
    );

    const liquidity = safeDivide(currentAssets, currentLiabilities);

    // Solvency

    const equity = getFieldValue(
      currentYear,
      mappedAccountingFields["Sum egenkapital"]
    );

    const totalAssets = getFieldValue(
      currentYear,
      mappedAccountingFields["Sum eiendeler"]
    );

    const solvency = safeDivide(equity, totalAssets);

    // Net profit margin

    const operatingProfit =
      getFieldValue(currentYear, mappedAccountingFields["Driftsinntekter"]) -
      getFieldValue(currentYear, mappedAccountingFields["Driftskostnader"]);

    const operatingRevenue = getFieldValue(
      currentYear,
      mappedAccountingFields["Driftsinntekter"]
    );

    const netProfitMargin = safeDivide(operatingProfit, operatingRevenue);

    // ROCE

    const operatingProfitBeforeTax = getFieldValue(
      currentYear,
      mappedAccountingFields["Ordinært resultat før skattekostnad"]
    );

    const totalAssetsMinusCurrentLiabilities = totalAssets - currentLiabilities;

    const returnOnEmployedCapital = safeDivide(
      operatingProfitBeforeTax,
      totalAssetsMinusCurrentLiabilities
    );

    // ROE

    const returnOnEquity = safeDivide(operatingProfitBeforeTax, equity);

    return {
      ...acc,
      [year]: {
        liquidity,
        solvency,
        netProfitMargin,
        returnOnEmployedCapital,
        returnOnEquity,
      },
    };
  }, {});
}
