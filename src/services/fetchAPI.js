export async function fetchRnM() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const RnM = await response.json();
  return RnM.results;
}

export async function fetchID(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const RnM = await response.json();
  return RnM;
}
