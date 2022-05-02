export async function fetchRnM() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const RnM = await response.json();
  console.log(RnM);
  return RnM.results;
}
