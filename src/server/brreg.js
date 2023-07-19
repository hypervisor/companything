// brreg APIs
// https://data.brreg.no/enhetsregisteret/api/enheter/{{orgNr}}
// https://data.brreg.no/enhetsregisteret/api/enheter/{{orgNr}}/roller
// https://data.brreg.no/regnskapsregisteret/regnskap/{{orgNr}}
// https://data.brreg.no/rofs/od/rofs/stottetildeling/search?mottakerOrgnr={{orgNr}}&language=nob
// https://data.brreg.no/fullmakt/enheter/{{orgNr}}/signatur
// https://data.brreg.no/fullmakt/enheter/{{orgNr}}/prokura

export default async function queryCompany(orgNr) {
  const encoded = encodeURIComponent(orgNr);
  const responses = await Promise.all([
    fetch(`https://data.brreg.no/enhetsregisteret/api/enheter/${encoded}`),
    fetch(
      `https://data.brreg.no/enhetsregisteret/api/enheter/${encoded}/roller`
    ),
    fetch(`https://data.brreg.no/regnskapsregisteret/regnskap/${encoded}`),
    fetch(
      `https://data.brreg.no/rofs/od/rofs/stottetildeling/search?mottakerOrgnr=${encoded}&language=nob`
    ),
    fetch(`https://data.brreg.no/fullmakt/enheter/${encoded}/signatur`),
    fetch(`https://data.brreg.no/fullmakt/enheter/${encoded}/prokura`),
  ]);

  const [company, roles, accounting, stateAid, signature, procuration] =
    await Promise.all(
      responses.map((response) =>
        response.ok
          ? response.json()
          : {
              res: {
                status: response.status,
                statusText: response.statusText,
                url: response.url,
              },
              status: response.status,
            }
      )
    );

  const mappedAccounting = accounting.reduce((acc, fiscalYear) => {
    const { regnskapsperiode } = fiscalYear;

    const fromDate = new Date(regnskapsperiode.fraDato);
    const year = fromDate.getFullYear();

    return {
      ...acc,
      [year]: {
        ...fiscalYear,
      },
    };
  }, {});

  return {
    company,
    roles,
    accounting: mappedAccounting,
    stateAid,
    signature,
    procuration,
  };
}
