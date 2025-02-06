import Footer from "../components/Footer";
import Header from "../components/Header";
import Task from "../components/Task";
import { fetchNouns, fetchAdjectives } from "../actions";
import { getDictionary } from "../dictionaries/dictionaries";

export async function generateMetadata({ params }) {
  const locale = (await params).lang;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.appTitle,
    description: dictionary.appDescription
  };
}

export default async function HomePage({ params }) {
  const locale = (await params).lang;
  const nouns = await fetchNouns(locale);
  const adjectives = await fetchAdjectives(locale);
  const dict = await getDictionary(locale);
  return (
    <div className="mx-auto h-full max-w-7xl text-center py-12 px-4 flex flex-col items-center justify-between">
      <Header dict={dict} />
      <Task dict={dict} nouns={nouns} adjectives={adjectives} />
      <Footer dict={dict} />
    </div>
  );
}
