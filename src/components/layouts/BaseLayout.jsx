// NextJS page layout component
// This is the base layout for all pages
// There should be a keybind cmd + k to open a search bar to search for companies.

import Head from "next/head";
import { Inter } from "next/font/google";
import SearchModal from "@/components/SearchModal";

const inter = Inter({ subsets: ["latin"] });

export default function BaseLayout({ children, title }) {
  const desiredTitle = title || "Søk etter selskap";

  return (
    <>
      <Head>
        <title>{desiredTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchModal />
      <main
        className={`flex min-h-screen min-w-screen flex-col items-center gap-8 ${inter.className}`}
      >
        {children}
      </main>
    </>
  );
}
