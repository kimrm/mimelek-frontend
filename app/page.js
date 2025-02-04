import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./components/Task";
import { fetchNouns, fetchAdjectives } from "./actions";

export default async function Home() {
  const nouns = await fetchNouns();
  const adjectives = await fetchAdjectives();
  return (
    <div className="mx-auto h-full max-w-7xl text-center py-12 px-4 flex flex-col items-center justify-between">
      <Header />
      <Task nouns={nouns} adjectives={adjectives} />
      <Footer />
    </div>
  );
}
