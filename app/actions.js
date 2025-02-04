export async function fetchNouns() {
  const response = await fetch(`${process.env.API_BASE}/nouns`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  });
  const data = await response.json();
  return data.data;
}

export async function fetchAdjectives() {
  const response = await fetch(`${process.env.API_BASE}/adjectives`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  });
  const data = await response.json();
  return data.data;
}
