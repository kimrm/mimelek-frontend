import React from "react";

export default function Header() {
  return (
    <div>
      <span className="text-5xl md:text-7xl">🎭</span>{" "}
      <h1 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 font-[family-name:var(--font-sour-gummy)] text-5xl md:text-7xl font-bold">
        Mimelek
      </h1>{" "}
      <span className="text-5xl md:text-7xl">🎭</span>
      <p className="text-xl mt-6 max-w-prose text-neutral-800 dark:text-neutral-200">
        Velkommen til Mimelek!
        <br /> Her kan du hurtig starte en mimelek-økt med familie og venner.
      </p>
    </div>
  );
}
