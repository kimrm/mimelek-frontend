"use client";
import { useEffect, useState } from "react";

export default function Task({ nouns, adjectives }) {
  const [task, setTask] = useState("");
  const [nounsList, setNounsList] = useState(nouns);
  const [adjectivesList, setAdjectivesList] = useState(adjectives);

  const getTask = () => {
    if (nounsList.length === 0 || adjectivesList.length === 0) {
      setTask("Ingen flere oppgaver igjen!");
      return;
    }
    const randomNoun = nounsList[Math.floor(Math.random() * nounsList.length)];
    const randomAdjective =
      adjectivesList[Math.floor(Math.random() * adjectivesList.length)];
    const adjektivForm =
      randomNoun.gender === "en" ? randomAdjective.en : randomAdjective.et;
    setTask(`${adjektivForm} ${randomNoun.word}`);

    setNounsList(nounsList.filter((noun) => noun.id !== randomNoun.id));
    setAdjectivesList(
      adjectivesList.filter((adjective) => adjective.id !== randomAdjective.id)
    );
  };

  useEffect(() => {
    if (adjectivesList.length === 0) {
      setAdjectivesList(adjectives);
    }
    if (nounsList.length === 0) {
      setNounsList(nouns);
    }
  }, [nounsList, adjectivesList]);

  return (
    <div className="px-4 py-6 w-full">
      <div className="flex w-full rounded-xl justify-center items-center border border-dashed border-green-500 min-h-[100px] px-3 py-6">
        <p className=" text-3xl sm:text-5xl md:text-7xl font-bold sm:mb-4 uppercase">
          {task === "" ? "Trykk på knapp for første oppgave!" : task}
        </p>
      </div>

      <button
        onClick={getTask}
        className="rounded-lg border border-transparent bg-[#f9f9f9] dark:bg-[#1a1a1a] cursor-pointer transition-colors duration-150 hover:border-green-500 px-4 py-2 mt-4"
      >
        {task === "" ? "Få første oppgave" : "Få ny oppgave"}
      </button>
    </div>
  );
}
