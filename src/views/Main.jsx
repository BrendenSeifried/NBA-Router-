// import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// import CharacterList from '../components/CharacterList';
// import { fetchRnM } from '../services/fetchAPI';

// export default function Main() {
//   const [data, setData] = useState([]);
//   const [load, setLoad] = useState(true);

//   useEffect(() => {
//     const fetchApi = async () => {
//       const resp = await fetchRnM();
//       setData(resp);
//       setLoad(false);
//     };
//     fetchApi();
//   }, []);

//   if (load) return <h1>Loading</h1>;

//   return (
//     <>
//       {data.map((item) => (
//         <CharacterList key={item.id} item={item} />
//       ))}
//     </>
//   );
// }

import React from 'react';
import { Link, Route } from 'react-router-dom';
import CharacterList from '../components/CharacterList';

export default function Main() {
  return (
    <>
      <div>
        <Link to={`/char`}>Main</Link>
      </div>
      <Route path={`/char`}>
        <CharacterList />
      </Route>
    </>
  );
}
