import queryCompany from "@/server/brreg";
import createFinancialAnalysis from "@/server/financial-analysis";

export default async function handler(req, res) {
  const orgNr = req.query.orgNr;

  try {
    const data = await queryCompany(orgNr);
    const analysis = createFinancialAnalysis(data.accounting);
    res.status(200).json({
      ...data,
      analysis,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}
