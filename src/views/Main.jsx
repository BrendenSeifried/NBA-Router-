// import React, { useEffect } from 'react';
// import { fetchRnM } from '../services/fetchAPI';

// export default function Main() {
//   const [data, setData] = useEffect([]);
//   const [load, setLoad] = useEffect(true);

//   useEffect(() => {
//     const fetchApi = async () => {
//       const resp = await fetchRnM();
//       console.log(resp);
//       setData(resp);
//       setLoad(false);
//     };
//     fetchApi();
//   }, []);

//   return <div>{load ? <h1>Loading</h1> : <h1>Loaded</h1>}</div>;
// }

import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import { fetchRnM } from '../services/fetchAPI';

export default function Main() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await fetchRnM();
      setData(resp);
      setLoad(false);
    };
    fetchApi();
  }, []);

  if (load) return <h1>Loading</h1>;

  return (
    <>
      {data.map((item) => (
        <CharacterList item={item} />
      ))}
    </>
  );
}
