import React from "react";

export default function Header() {
  return (
    <div>
      <span className="text-5xl md:text-7xl">🎭</span>{" "}
      <h1 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 font-[family-name:var(--font-sour-gummy)] text-5xl md:text-7xl font-bold">
        Mimelek
      </h1>{" "}
      <span className="text-5xl md:text-7xl">🎭</span>
      <h2 className="text-2xl mt-4 max-w-prose text-neutral-800 dark:text-neutral-200">
        Mimespill for hele familien
      </h2>
      <p className="text-xl mt-2 max-w-prose text-neutral-800 dark:text-neutral-200">
        Her kan du hurtig starte en mimelek-økt med familie og venner.
      </p>
    </div>
  );
}
