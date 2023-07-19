const mockCompany = {
  company: {
    organisasjonsnummer: "123456789",
    navn: "ATOMIC TECHNOLOGY AS",
    organisasjonsform: {
      kode: "AS",
      beskrivelse: "Aksjeselskap",
      _links: {
        self: {
          href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS",
        },
      },
    },
    registreringsdatoEnhetsregisteret: "2016-03-10",
    registrertIMvaregisteret: true,
    frivilligMvaRegistrertBeskrivelser: ["Utleier av bygg eller anlegg"],
    naeringskode1: { beskrivelse: "Reklamebyråer", kode: "73.110" },
    antallAnsatte: 6,
    forretningsadresse: {
      land: "Norge",
      landkode: "NO",
      postnummer: "5072",
      poststed: "BERGEN",
      adresse: ["Test Gata 44"],
      kommune: "BERGEN",
      kommunenummer: "4601",
    },
    stiftelsesdato: "2016-09-05",
    institusjonellSektorkode: {
      kode: "2100",
      beskrivelse: "Private aksjeselskaper mv.",
    },
    registrertIForetaksregisteret: true,
    registrertIStiftelsesregisteret: false,
    registrertIFrivillighetsregisteret: false,
    sisteInnsendteAarsregnskap: "2022",
    konkurs: false,
    underAvvikling: false,
    underTvangsavviklingEllerTvangsopplosning: false,
    maalform: "Bokmål",
    _links: {
      self: {
        href: "https://data.brreg.no/enhetsregisteret/api/enheter/123456789",
      },
    },
  },
  roles: {
    rollegrupper: [
      {
        type: {
          kode: "DAGL",
          beskrivelse: "Daglig leder",
          _links: {
            self: {
              href: "https://data.brreg.no/enhetsregisteret/api/roller/rollegruppetyper/DAGL",
            },
          },
        },
        sistEndret: "2018-01-03",
        roller: [
          {
            type: {
              kode: "DAGL",
              beskrivelse: "Daglig leder",
              _links: {
                self: {
                  href: "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/DAGL",
                },
              },
            },
            person: {
              fodselsdato: "1975-10-12",
              navn: {
                fornavn: "Peder",
                etternavn: "Larsen",
              },
              erDoed: false,
            },
            fratraadt: false,
            rekkefolge: 0,
          },
        ],
      },
      {
        type: {
          kode: "STYR",
          beskrivelse: "Styre",
          _links: {
            self: {
              href: "https://data.brreg.no/enhetsregisteret/api/roller/rollegruppetyper/STYR",
            },
          },
        },
        sistEndret: "2023-03-10",
        roller: [
          {
            type: {
              kode: "LEDE",
              beskrivelse: "Styrets leder",
              _links: {
                self: {
                  href: "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/LEDE",
                },
              },
            },
            person: {
              fodselsdato: "1966-05-04",
              navn: { fornavn: "Jon", etternavn: "Almaas" },
              erDoed: false,
            },
            fratraadt: false,
            rekkefolge: 0,
          },
          {
            type: {
              kode: "MEDL",
              beskrivelse: "Styremedlem",
              _links: {
                self: {
                  href: "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/MEDL",
                },
              },
            },
            person: {
              fodselsdato: "1977-13-05",
              navn: { fornavn: "Miley", etternavn: "Cyrus" },
              erDoed: false,
            },
            fratraadt: false,
            rekkefolge: 1,
          },
          {
            type: {
              kode: "MEDL",
              beskrivelse: "Styremedlem",
              _links: {
                self: {
                  href: "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/MEDL",
                },
              },
            },
            person: {
              fodselsdato: "1945-04-12",
              navn: {
                fornavn: "Amanda",
                mellomnavn: "Bjørn",
                etternavn: "Hansen",
              },
              erDoed: false,
            },
            fratraadt: false,
            rekkefolge: 2,
          },
          {
            type: {
              kode: "MEDL",
              beskrivelse: "Styremedlem",
              _links: {
                self: {
                  href: "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/MEDL",
                },
              },
            },
            person: {
              fodselsdato: "1988-03-13",
              navn: { fornavn: "Kyrre", etternavn: "Jonson" },
              erDoed: false,
            },
            fratraadt: false,
            rekkefolge: 3,
          },
        ],
      },
      {
        type: {
          kode: "REVI",
          beskrivelse: "Revisor",
          _links: {
            self: {
              href: "https://data.brreg.no/enhetsregisteret/api/roller/rollegruppetyper/REVI",
            },
          },
        },
        sistEndret: "2018-07-04",
        roller: [
          {
            type: {
              kode: "REVI",
              beskrivelse: "Revisor",
              _links: {
                self: {
                  href: "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/REVI",
                },
              },
            },
            enhet: {
              organisasjonsnummer: "982316588",
              organisasjonsform: {
                kode: "AS",
                beskrivelse: "Aksjeselskap",
                _links: {
                  self: {
                    href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS",
                  },
                },
              },
              navn: ["RSM NORGE AS"],
              erSlettet: false,
              _links: {
                self: {
                  href: "https://data.brreg.no/enhetsregisteret/api/enheter/982316588",
                },
              },
            },
            fratraadt: false,
            rekkefolge: 0,
          },
        ],
      },
      {
        type: {
          kode: "REGN",
          beskrivelse: "Regnskapsfører",
          _links: {
            self: {
              href: "https://data.brreg.no/enhetsregisteret/api/roller/rollegruppetyper/REGN",
            },
          },
        },
        sistEndret: "2016-10-21",
        roller: [
          {
            type: {
              kode: "REGN",
              beskrivelse: "Regnskapsfører",
              _links: {
                self: {
                  href: "https://data.brreg.no/enhetsregisteret/api/roller/rolletyper/REGN",
                },
              },
            },
            enhet: {
              organisasjonsnummer: "984313667",
              organisasjonsform: {
                kode: "AS",
                beskrivelse: "Aksjeselskap",
                _links: {
                  self: {
                    href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS",
                  },
                },
              },
              navn: ["ROTT REGNSKAP OG RÅDGIVNING AS"],
              erSlettet: false,
              _links: {
                self: {
                  href: "https://data.brreg.no/enhetsregisteret/api/enheter/984313667",
                },
              },
            },
            fratraadt: false,
            rekkefolge: 0,
          },
        ],
      },
    ],
    _links: {
      self: {
        href: "https://data.brreg.no/enhetsregisteret/api/enheter/123456789/roller",
      },
      enhet: {
        href: "https://data.brreg.no/enhetsregisteret/api/enheter/123456789",
      },
    },
  },
  accounting: {
    2022: {
      id: 3794547,
      journalnr: "2023342789",
      regnskapstype: "SELSKAP",
      virksomhet: {
        organisasjonsnummer: "123456789",
        organisasjonsform: "AS",
        morselskap: false,
      },
      regnskapsperiode: { fraDato: "2022-01-01", tilDato: "2022-12-31" },
      valuta: "NOK",
      avviklingsregnskap: false,
      oppstillingsplan: "store",
      revisjon: { ikkeRevidertAarsregnskap: false, fravalgRevisjon: false },
      regnkapsprinsipper: {
        smaaForetak: true,
        regnskapsregler: "regnskapslovenAlminneligRegler",
      },
      egenkapitalGjeld: {
        sumEgenkapitalGjeld: 6386908,
        egenkapital: {
          sumEgenkapital: 1941929,
          opptjentEgenkapital: { sumOpptjentEgenkapital: 1841929 },
          innskuttEgenkapital: { sumInnskuttEgenkaptial: 100000 },
        },
        gjeldOversikt: {
          sumGjeld: 4444979,
          kortsiktigGjeld: { sumKortsiktigGjeld: 4444979 },
          langsiktigGjeld: { sumLangsiktigGjeld: 0 },
        },
      },
      eiendeler: {
        sumEiendeler: 6386908,
        omloepsmidler: { sumOmloepsmidler: 6232412 },
        anleggsmidler: { sumAnleggsmidler: 154497 },
      },
      resultatregnskapResultat: {
        ordinaertResultatFoerSkattekostnad: 790856,
        aarsresultat: 607729,
        finansresultat: {
          nettoFinans: -40570,
          finansinntekt: { sumFinansinntekter: 1857 },
          finanskostnad: { sumFinanskostnad: 42427 },
        },
        driftsresultat: {
          driftsresultat: 831426,
          driftsinntekter: { sumDriftsinntekter: 19364376 },
          driftskostnad: { sumDriftskostnad: 18532950 },
        },
      },
    },
    2021: {
      id: 3794547,
      journalnr: "2023342789",
      regnskapstype: "SELSKAP",
      virksomhet: {
        organisasjonsnummer: "123456789",
        organisasjonsform: "AS",
        morselskap: false,
      },
      regnskapsperiode: { fraDato: "2022-01-01", tilDato: "2022-12-31" },
      valuta: "NOK",
      avviklingsregnskap: false,
      oppstillingsplan: "store",
      revisjon: { ikkeRevidertAarsregnskap: false, fravalgRevisjon: false },
      regnkapsprinsipper: {
        smaaForetak: true,
        regnskapsregler: "regnskapslovenAlminneligRegler",
      },
      egenkapitalGjeld: {
        sumEgenkapitalGjeld: 6386908,
        egenkapital: {
          sumEgenkapital: 1541929,
          opptjentEgenkapital: { sumOpptjentEgenkapital: 1441929 },
          innskuttEgenkapital: { sumInnskuttEgenkaptial: 100000 },
        },
        gjeldOversikt: {
          sumGjeld: 3444979,
          kortsiktigGjeld: { sumKortsiktigGjeld: 3444979 },
          langsiktigGjeld: { sumLangsiktigGjeld: 0 },
        },
      },
      eiendeler: {
        sumEiendeler: 5140426,
        omloepsmidler: { sumOmloepsmidler: 4985929 },
        anleggsmidler: { sumAnleggsmidler: 154497 },
      },
      resultatregnskapResultat: {
        ordinaertResultatFoerSkattekostnad: 3957980,
        aarsresultat: 3008064,
        finansresultat: {
          nettoFinans: -570,
          finansinntekt: { sumFinansinntekter: 1857 },
          finanskostnad: { sumFinanskostnad: 2427 },
        },
        driftsresultat: {
          driftsresultat: 3958550,
          driftsinntekter: { sumDriftsinntekter: 15491500 },
          driftskostnad: { sumDriftskostnad: 11532950 },
        },
      },
    },
  },
  stateAid: [],
  signature: {
    oppslagsData: {
      oppslagsTidspunkt: "2023-07-13T07:17:49",
      oppslagsIdent: "4838851",
    },
    status: {
      rutineStatus: {
        kode: "OK",
        tekstforklaring: "Maskinelt oppslag utført uten feil.",
      },
      kombinasjonStatus: {
        kode: "OK",
        tekstforklaring: "Kombinasjon finnes.",
      },
      regelStatus: {
        kode: "RF",
        tekstforklaring: "Regel funnet.",
        regelIdent: "R0012",
      },
    },
    enhet: {
      organisasjonsnummer: "123456789",
      navn: "ATOMIC TECHNOLOGY AS",
      organisasjonsform: {
        kode: "AS",
        beskrivelse: "Aksjeselskap",
        _links: {
          self: {
            href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS",
          },
        },
      },
      konkurs: "false",
      underAvvikling: "false",
      underTvangsavviklingEllerTvangsopplosning: "false",
      _links: {
        self: {
          href: "https://data.brreg.no/enhetsregisteret/api/enheter/123456789",
        },
      },
    },
    signeringsGrunnlag: {
      kode: "SF",
      tekstforklaring: "Signeringsgrunnlag finnes",
      signaturProkuraRoller: {
        signaturProkuraFritekst:
          "To styremedlemmer i fellesskap. Styrets leder alene.",
      },
      muligeSigneringsRoller: {
        personRolleGrunnlag: [
          {
            fodselsdato: "01.01.1999",
            navn: "Peder Larsen",
            rolle: {
              kode: "DAGL",
              tekstforklaring: "Daglig leder/administrerende direktør",
            },
          },
          {
            fodselsdato: "01.01.1999",
            navn: "Jon Almaas",
            rolle: { kode: "LEDE", tekstforklaring: "Styrets leder" },
          },
          {
            fodselsdato: "01.01.1999",
            navn: "Miley Cyrus",
            rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
          },
          {
            fodselsdato: "01.01.1999",
            navn: "Amanda Bjørn Hansen",
            rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
          },
          {
            fodselsdato: "01.01.1999",
            navn: "Kyrre Jonson",
            rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
          },
        ],
      },
    },
    signeringsKombinasjon: {
      kombinasjon: [
        {
          kode: "STYR",
          tekstforklaring: "Styret i fellesskap",
          kombinasjonsId: "1",
          personRolleKombinasjon: [
            {
              fodselsdato: "01.01.1999",
              navn: "Jon Almaas",
              rolle: { kode: "LEDE", tekstforklaring: "Styrets leder" },
            },
            {
              fodselsdato: "01.01.1999",
              navn: "Miley Cyrus",
              rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
            },
            {
              fodselsdato: "01.01.1999",
              navn: "Amanda Bjørn Hansen",
              rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
            },
            {
              fodselsdato: "01.01.1999",
              navn: "Kyrre Jonson",
              rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
            },
          ],
        },
        {
          kode: "R0012",
          tekstforklaring:
            "Styrets leder alene eller to styremedlemmer i fellesskap",
          kombinasjonsId: "1",
          personRolleKombinasjon: [
            {
              fodselsdato: "01.01.1999",
              navn: "Jon Almaas",
              rolle: { kode: "LEDE", tekstforklaring: "Styrets leder" },
            },
          ],
        },
        {
          kode: "R0012",
          tekstforklaring:
            "Styrets leder alene eller to styremedlemmer i fellesskap",
          kombinasjonsId: "2",
          personRolleKombinasjon: [
            {
              fodselsdato: "01.01.1999",
              navn: "Miley Cyrus",
              rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
            },
            {
              fodselsdato: "01.01.1999",
              navn: "Amanda Bjørn Hansen",
              rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
            },
          ],
        },
        {
          kode: "R0012",
          tekstforklaring:
            "Styrets leder alene eller to styremedlemmer i fellesskap",
          kombinasjonsId: "3",
          personRolleKombinasjon: [
            {
              fodselsdato: "01.01.1999",
              navn: "Amanda Bjørn Hansen",
              rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
            },
            {
              fodselsdato: "01.01.1999",
              navn: "Kyrre Jonson",
              rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
            },
          ],
        },
        {
          kode: "R0012",
          tekstforklaring:
            "Styrets leder alene eller to styremedlemmer i fellesskap",
          kombinasjonsId: "4",
          personRolleKombinasjon: [
            {
              fodselsdato: "01.01.1999",
              navn: "Miley Cyrus",
              rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
            },
            {
              fodselsdato: "01.01.1999",
              navn: "Kyrre Jonson",
              rolle: { kode: "MEDL", tekstforklaring: "Styremedlem" },
            },
          ],
        },
      ],
    },
    _links: {
      self: {
        href: "https://data.brreg.no/fullmakt/enheter/123456789/signatur",
      },
    },
  },
  procuration: {
    oppslagsData: {
      oppslagsTidspunkt: "2023-07-13T07:17:49",
      oppslagsIdent: "4838852",
    },
    status: {
      rutineStatus: {
        kode: "OK",
        tekstforklaring: "Maskinelt oppslag utført uten feil.",
      },
      kombinasjonStatus: {
        kode: "IK",
        tekstforklaring: "Kombinasjon kan ikke hentes eller finnes ikke.",
      },
      regelStatus: {
        kode: "RI",
        tekstforklaring: "Regel er ikke registrert eller standardisert.",
        regelIdent: null,
      },
    },
    enhet: {
      organisasjonsnummer: "123456789",
      navn: "ATOMIC TECHNOLOGY AS",
      organisasjonsform: {
        kode: "AS",
        beskrivelse: "Aksjeselskap",
        _links: {
          self: {
            href: "https://data.brreg.no/enhetsregisteret/api/organisasjonsformer/AS",
          },
        },
      },
      konkurs: "false",
      underAvvikling: "false",
      underTvangsavviklingEllerTvangsopplosning: "false",
      _links: {
        self: {
          href: "https://data.brreg.no/enhetsregisteret/api/enheter/123456789",
        },
      },
    },
    signeringsGrunnlag: {
      kode: "SI",
      tekstforklaring: "Signeringsgrunnlag finnes ikke",
    },
    _links: {
      self: {
        href: "https://data.brreg.no/fullmakt/enheter/123456789/prokura",
      },
    },
  },
  analysis: {
    2021: {
      liquidity: 1.4473031620802332,
      solvency: 0.299961326162462,
      netProfitMargin: 0.25553045218345544,
      returnOnEmployedCapital: 2.334475804905727,
      returnOnEquity: 2.5669015888539617,
    },
    2022: {
      liquidity: 1.40212405952874,
      solvency: 0.3040483752075339,
      netProfitMargin: 0.04293585292911065,
      returnOnEmployedCapital: 0.40725278833572187,
      returnOnEquity: 0.40725278833572187,
    },
  },
};

export default mockCompany;
