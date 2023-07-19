const accountingFields = [
  {
    header: "Egenkapital og gjeld",
  },
  {
    field:
      "egenkapitalGjeld.egenkapital.opptjentEgenkapital.sumOpptjentEgenkapital",
    name: "Opptjent egenkapital",
  },
  {
    field:
      "egenkapitalGjeld.egenkapital.innskuttEgenkapital.sumInnskuttEgenkaptial",
    name: "Innskutt egenkapital",
  },
  {
    field: "egenkapitalGjeld.egenkapital.sumEgenkapital",
    name: "Sum egenkapital",
  },
  {
    field: "egenkapitalGjeld.gjeldOversikt.langsiktigGjeld.sumLangsiktigGjeld",
    name: "Langsiktig gjeld",
  },
  {
    field: "egenkapitalGjeld.gjeldOversikt.kortsiktigGjeld.sumKortsiktigGjeld",
    name: "Kortsiktig gjeld",
  },
  {
    field: "egenkapitalGjeld.gjeldOversikt.sumGjeld",
    name: "Sum gjeld",
  },
  {
    field: "egenkapitalGjeld.sumEgenkapitalGjeld",
    name: "Sum gjeld og egenkapital",
  },
  {
    header: "Eiendeler",
  },
  {
    field: "eiendeler.omloepsmidler.sumOmloepsmidler",
    name: "Omløpsmidler",
  },
  {
    field: "eiendeler.anleggsmidler.sumAnleggsmidler",
    name: "Anleggsmidler",
  },
  {
    field: "eiendeler.sumEiendeler",
    name: "Sum eiendeler",
  },
  {
    header: "Resultat",
  },
  {
    field:
      "resultatregnskapResultat.finansresultat.finansinntekt.sumFinansinntekter",
    name: "Finansinntekter",
  },
  {
    field:
      "resultatregnskapResultat.finansresultat.finanskostnad.sumFinanskostnad",
    name: "Finanskostnader",
  },
  {
    field: "resultatregnskapResultat.finansresultat.nettoFinans",
    name: "Netto finans",
  },
  {
    field:
      "resultatregnskapResultat.driftsresultat.driftsinntekter.sumDriftsinntekter",
    name: "Driftsinntekter",
  },
  {
    field:
      "resultatregnskapResultat.driftsresultat.driftskostnad.sumDriftskostnad",
    name: "Driftskostnader",
  },
  {
    field: "resultatregnskapResultat.ordinaertResultatFoerSkattekostnad",
    name: "Ordinært resultat før skattekostnad",
  },
  {
    field: "resultatregnskapResultat.aarsresultat",
    name: "Årsresultat",
  },
];

const mappedAccountingFields = accountingFields.reduce((acc, field) => {
  if (field.header) {
    return acc;
  }

  return {
    ...acc,
    [field.name]: field.field,
  };
}, {});

export { accountingFields, mappedAccountingFields };
