export async function fetchNouns(language = "no") {
  const response = await fetch(
    `${process.env.API_BASE}/nouns?language=${language}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`
      }
    }
  );
  const data = await response.json();
  return data.data;
}

export async function fetchAdjectives(language = "no") {
  const response = await fetch(
    `${process.env.API_BASE}/adjectives?language=${language}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`
      }
    }
  );
  const data = await response.json();
  return data.data;
}
