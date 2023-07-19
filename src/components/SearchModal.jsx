import React, { Fragment, useState } from "react";
import { Router, useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState({});
  const [companies, setCompanies] = useState([]);
  const router = useRouter();

  React.useEffect(() => {
    const keyListener = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        setOpen((prevOpen) => !prevOpen);
      }
    };

    window.addEventListener("keydown", keyListener);

    return () => {
      window.removeEventListener("keydown", keyListener);
    };
  }, []);

  const onQueryChange = async (e) => {
    // Fetch companies from brreg
    // Example curl 'https://data.brreg.no/enhetsregisteret/api/enheter?navn=Sesam&fraRegistreringsdatoEnhetsregisteret=2017-10-20&tilRegistreringsdatoEnhetsregisteret=2017-10-20&konkurs=false' -i -X GET

    const res = await fetch(
      `https://data.brreg.no/enhetsregisteret/api/enheter?navn=${encodeURIComponent(
        e.target.value
      )}&size=10`
    );

    if (!res.ok) {
      setCompanies([]);
      return;
    }

    const responseData = await res.json();
    const companies = responseData?._embedded?.enheter || [];

    setCompanies(companies);
  };

  const onCompanySelected = (company) => {
    const { organisasjonsnummer } = company;
    const url = `/company/${encodeURIComponent(organisasjonsnummer)}`;

    router.push(url);
    setOpen(false);
    setCompanies([]);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-50"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-50"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-50"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-50"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className="mt-2">
                      <Combobox
                        as="div"
                        value={selectedCompany}
                        onChange={onCompanySelected}
                      >
                        <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
                          Søk etter selskap
                        </Combobox.Label>
                        <div className="relative mt-2">
                          <Combobox.Input
                            className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={onQueryChange}
                            displayValue={({ navn }) => navn}
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Combobox.Button>

                          {companies.length > 0 && (
                            <Combobox.Options className="absolute z-10 mt-1 max-h-96 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {companies.map((company) => (
                                <Combobox.Option
                                  key={company.organisasjonsnummer}
                                  value={company}
                                  className={({ active }) =>
                                    classNames(
                                      "relative cursor-default select-none py-2 pl-3 pr-9",
                                      active
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-900"
                                    )
                                  }
                                >
                                  {({ active, selected }) => (
                                    <>
                                      <div className="flex">
                                        <span
                                          className={classNames(
                                            "truncate",
                                            selected && "font-semibold"
                                          )}
                                        >
                                          {company.navn}
                                        </span>
                                        <span
                                          className={classNames(
                                            "ml-2 truncate text-gray-500",
                                            active
                                              ? "text-indigo-200"
                                              : "text-gray-500"
                                          )}
                                        >
                                          {company.organisasjonsnummer}
                                        </span>
                                      </div>
                                    </>
                                  )}
                                </Combobox.Option>
                              ))}
                            </Combobox.Options>
                          )}
                        </div>
                      </Combobox>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
