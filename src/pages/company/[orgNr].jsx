import formatNOK from "@/util/formatNOK";
import getFieldValue from "@/util/getFieldValue";
import { accountingFields } from "@/util/accountingFields";
import formatPercent from "@/util/formatPercent";
import safeDivide from "@/util/safeDivide";
import mockCompany from "@/test-data/company";
import BaseLayout from "@/components/layouts/BaseLayout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getServerSideProps(context) {
  const { orgNr } = context.params;

  let company = null;
  if (orgNr == 123456789) {
    company = mockCompany;
  } else {
    const baseURL =
      process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
    const res = await fetch(
      `${baseURL}/api/company?orgNr=${encodeURIComponent(orgNr)}`
    );

    if (!res.ok) {
      return {
        notFound: true,
      };
    }

    company = await res.json();
  }

  return {
    props: {
      company,
    },
  };
}

export default function CompanyPage(props) {
  const {
    company,
    roles,
    accounting,
    stateAid,
    signature,
    procuration,
    analysis,
  } = props.company || {};

  // Get the latest fiscal year like f.ex "2022"
  const latestFiscalYear = Object.keys(accounting).sort().reverse()[0];
  const latestFiscalAnalysis = analysis[latestFiscalYear];
  const lastFiscalYear = Object.keys(accounting).sort().reverse()[1] || null;
  const lastFiscalAnalysis = lastFiscalYear ? analysis[lastFiscalYear] : {};

  const liquidityChange = safeDivide(
    latestFiscalAnalysis.liquidity,
    lastFiscalAnalysis.liquidity
  );

  const solvencyChange = safeDivide(
    latestFiscalAnalysis.solvency,
    lastFiscalAnalysis.solvency
  );

  const npmChange = safeDivide(
    latestFiscalAnalysis.netProfitMargin,
    lastFiscalAnalysis.netProfitMargin
  );

  const roecChange = safeDivide(
    latestFiscalAnalysis.returnOnEmployedCapital,
    lastFiscalAnalysis.returnOnEmployedCapital
  );

  const roeChange = safeDivide(
    latestFiscalAnalysis.returnOnEquity,
    lastFiscalAnalysis.returnOnEquity
  );

  const getChangeType = (change) => {
    if (change < 1) {
      return "negative";
    } else {
      return "positive";
    }
  };

  const stats = [
    {
      name: "Likviditet",
      value: formatPercent(latestFiscalAnalysis.liquidity),
      change: formatPercent(liquidityChange),
      changeType: getChangeType(liquidityChange),
    },
    {
      name: "Soliditet",
      value: formatPercent(latestFiscalAnalysis.solvency),
      change: formatPercent(solvencyChange),
      changeType: getChangeType(solvencyChange),
    },
    {
      name: "Lønnsomhet (NPM)",
      value: formatPercent(latestFiscalAnalysis.netProfitMargin),
      change: formatPercent(npmChange),
      changeType: getChangeType(npmChange),
    },
    {
      name: "Lønnsomhet (ROEC)",
      value: formatPercent(latestFiscalAnalysis.returnOnEmployedCapital),
      change: formatPercent(roecChange),
      changeType: getChangeType(roecChange),
    },
  ];

  return (
    <BaseLayout>
      <div className="flex flex-col gap-8 w-full max-w-[1400px]">
        {company ? (
          <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto flex flex-col gap-8">
                  <h1 className="text-3xl font-semibold text-gray-900 mt-8">
                    {company.navn}
                  </h1>
                  <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
                    <dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
                      {stats.map((stat, statIdx) => (
                        <div
                          key={stat.name}
                          className={classNames(
                            statIdx % 2 === 1
                              ? "sm:border-l"
                              : statIdx === 2
                              ? "lg:border-l"
                              : "",
                            "flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8"
                          )}
                        >
                          <dt className="text-sm font-medium leading-6 text-gray-500">
                            {stat.name}
                          </dt>
                          <dd
                            className={classNames(
                              stat.changeType === "negative"
                                ? "text-rose-600"
                                : "text-green-700",
                              "text-xs font-medium"
                            )}
                          >
                            {stat.change}
                          </dd>
                          <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
                            {stat.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flow-root overflow-hidden">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <table className="w-full text-left">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                      >
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                      </th>
                      {Object.keys(accounting).map((key) => (
                        <th
                          key={key}
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          {key}
                        </th>
                      ))}
                      <th scope="col" className="relative py-3.5 pl-3">
                        <span className="sr-only">Show graph</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* if field.header, just a header for the fields below it */}
                    {accountingFields.map((field, index) =>
                      field.header ? (
                        <tr key={field.header} className="even:bg-gray-50">
                          <th
                            scope="row"
                            className="relative py-4 px-3 text-sm font-bold text-gray-900"
                          >
                            {field.header}
                          </th>
                        </tr>
                      ) : (
                        <tr key={field.field} className="even:bg-gray-50">
                          <td className="relative py-4 px-6 text-sm font-medium text-gray-900">
                            {field.name}
                          </td>
                          {Object.keys(accounting).map((key) => (
                            <td
                              key={key}
                              className="px-3 py-4 text-sm text-gray-500"
                            >
                              {formatNOK(
                                getFieldValue(accounting[key], field.field)
                              )}
                            </td>
                          ))}
                          <td className="relative py-4 px-3 text-right text-sm font-medium">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Show graph
                            </a>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </BaseLayout>
  );
}
