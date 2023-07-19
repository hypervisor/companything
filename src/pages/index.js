import React from "react";
import SearchModal from "@/components/SearchModal";
import KeyboardButton from "@/components/KeyboardButton";

function isMacOS() {
  // Check if code is running in the browser
  if (typeof window !== "undefined") {
    const platform = window.navigator.platform;
    const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];

    return macosPlatforms.includes(platform);
  }

  // Default value for server-side rendering
  return false;
}

function SearchKeyboardShortcut() {
  const isMac = React.useMemo(() => isMacOS(), []);
  if (isMacOS) {
    return <KeyboardButton>⌘</KeyboardButton>;
  }

  return <KeyboardButton>Ctrl</KeyboardButton>;
}

export default function IndexPage() {
  return (
    <>
      <SearchModal />
      <main className="flex flex-col min-h-screen justify-center items-center gap-4">
        <h1 className="font-bold">Søk etter selskap</h1>
        <p className="text-gray-500">
          Trykk på <SearchKeyboardShortcut /> +{" "}
          <KeyboardButton>k</KeyboardButton> for å søke etter selskap.
        </p>
      </main>
    </>
  );
}
