"use client";
import { useEffect, useState } from "react";
import { ArrowPathIcon } from "./ArrowPathIcon";

export default function Task({ nouns, adjectives, dict }) {
  const [taskMode, setTaskMode] = useState(3);
  const [difficultyMode, setDifficultyMode] = useState(4);
  const [task, setTask] = useState("");
  const [nounsList, setNounsList] = useState(nouns);
  const [adjectivesList, setAdjectivesList] = useState(adjectives);
  const [workingNounsList, setWorkingNounsList] = useState([]);
  const [workingAdjectivesList, setWorkingAdjectivesList] = useState([]);

  const resetWorkingNounsList = () => {
    const filteredNounsList = nouns.filter((noun) => {
      if (difficultyMode === 1) {
        return noun.difficulty === "easy";
      } else if (difficultyMode === 2) {
        return noun.difficulty === "medium";
      } else if (difficultyMode === 3) {
        return noun.difficulty === "hard";
      } else {
        return true;
      }
    });
    setWorkingNounsList(filteredNounsList);
    setNounsList(filteredNounsList);
  };

  const resetWorkingAdjectivesList = () => {
    const filteredAdjectivesList = adjectives.filter((adjective) => {
      if (difficultyMode === 1) {
        return adjective.difficulty === "easy";
      } else if (difficultyMode === 2) {
        return adjective.difficulty === "medium";
      } else if (difficultyMode === 3) {
        return adjective.difficulty === "hard";
      } else {
        return true;
      }
    });
    setWorkingAdjectivesList(filteredAdjectivesList);
    setAdjectivesList(filteredAdjectivesList);
  };

  const filterNounsList = () => {
    const filteredNounsList = nounsList.filter((noun) => {
      if (difficultyMode === 1) {
        return noun.difficulty === "easy";
      } else if (difficultyMode === 2) {
        return noun.difficulty === "medium";
      } else if (difficultyMode === 3) {
        return noun.difficulty === "hard";
      } else {
        return true;
      }
    });
    setWorkingNounsList(filteredNounsList);
  };

  const filterAdjectivesList = () => {
    const filteredAdjectivesList = adjectivesList.filter((adjective) => {
      if (difficultyMode === 1) {
        return adjective.difficulty === "easy";
      } else if (difficultyMode === 2) {
        return adjective.difficulty === "medium";
      } else if (difficultyMode === 3) {
        return adjective.difficulty === "hard";
      } else {
        return true;
      }
    });
    setWorkingAdjectivesList(filteredAdjectivesList);
  };

  useEffect(() => {
    filterNounsList();
    filterAdjectivesList();
  }, [taskMode, difficultyMode]);

  const getTask = () => {
    if (workingNounsList.length === 0 || workingAdjectivesList.length === 0) {
      setTask("Ingen flere oppgaver igjen!");
      return;
    }

    const randomNoun =
      workingNounsList[Math.floor(Math.random() * workingNounsList.length)];
    const randomAdjective =
      workingAdjectivesList[
        Math.floor(Math.random() * workingAdjectivesList.length)
      ];
    const adjektivForm =
      randomNoun.gender === "en" ? randomAdjective.en : randomAdjective.et;

    if (taskMode === 1) {
      setTask(randomNoun.word);
    } else if (taskMode === 2) {
      setTask(randomAdjective.word);
    } else {
      setTask(`${adjektivForm} ${randomNoun.word}`);
    }

    setNounsList(nounsList.filter((noun) => noun.id !== randomNoun.id));
    setAdjectivesList(
      adjectivesList.filter((adjective) => adjective.id !== randomAdjective.id)
    );

    setWorkingNounsList(
      workingNounsList.filter((noun) => noun.id !== randomNoun.id)
    );
    setWorkingAdjectivesList(
      workingAdjectivesList.filter(
        (adjective) => adjective.id !== randomAdjective.id
      )
    );
  };

  useEffect(() => {
    if (workingNounsList.length === 0) {
      resetWorkingNounsList();
    }
    if (workingAdjectivesList.length === 0) {
      resetWorkingAdjectivesList();
    }
  }, [workingNounsList, workingAdjectivesList]);

  const handleTaskModeChange = () => {
    if (taskMode === 1) {
      setTaskMode(2);
    } else if (taskMode === 2) {
      setTaskMode(3);
    } else {
      setTaskMode(1);
    }
  };

  const handleDifficultyModeChange = () => {
    if (difficultyMode === 1) {
      setDifficultyMode(2);
    } else if (difficultyMode === 2) {
      setDifficultyMode(3);
    } else if (difficultyMode === 3) {
      setDifficultyMode(4);
    } else {
      setDifficultyMode(1);
    }
  };

  return (
    <div className="px-4 py-6 w-full">
      <div className="flex flex-wrap justify-center items-center mb-6">
        <div className="flex flex-col md:flex-row flex-wrap justify-center w-full items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <button
            onClick={handleTaskModeChange}
            className={`px-2 py-2 border text-black font-bold ${
              taskMode === 1
                ? "bg-green-400"
                : taskMode === 2
                ? "bg-indigo-400"
                : "bg-blue-400"
            } rounded-lg flex items-center space-x-1`}
          >
            <ArrowPathIcon className="w-4 h-4" />
            <span className="uppercase text-xs tracking-wider">
              {taskMode === 1
                ? dict.noun
                : taskMode === 2
                ? dict.adjective
                : `${dict.noun} & ${dict.adjective}`}
            </span>
          </button>
          <button
            onClick={handleDifficultyModeChange}
            className={`px-2 py-2 border text-black font-bold ${
              difficultyMode === 1
                ? "bg-green-400"
                : difficultyMode === 2
                ? "bg-indigo-400"
                : difficultyMode === 3
                ? "bg-blue-400"
                : "bg-yellow-400"
            } rounded-lg flex items-center space-x-1`}
          >
            <ArrowPathIcon className="w-4 h-4" />
            <span className="uppercase text-xs tracking-wider">
              {difficultyMode === 1
                ? dict.easy
                : difficultyMode === 2
                ? dict.medium
                : difficultyMode === 3
                ? dict.hard
                : `Mix (${dict.difficulty})`}
            </span>
          </button>
        </div>
        <div className="flex justify-center w-full items-center space-x-4">
          <div></div>
        </div>
      </div>
      <div className="flex w-full max-w-3xl mx-auto rounded-xl justify-center items-center outline outline-white min-h-[170px] px-3 py-6 bg-neutral-100 shadow-lg dark:bg-neutral-800 mb-4 ">
        <p className=" text-3xl sm:text-4xl md:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
          {task === "" ? dict.buttonText : task}
        </p>
      </div>

      <button
        onClick={getTask}
        className="rounded-lg border border-transparent bg-[#f9f9f9] dark:bg-[#1a1a1a] cursor-pointer transition-colors duration-150 hover:border-green-500 px-4 py-2 mt-4"
      >
        {task === "" ? dict.buttonTextOne : dict.buttonTextTwo}
      </button>
    </div>
  );
}
