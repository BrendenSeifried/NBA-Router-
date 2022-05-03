import React, { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import CharacterList from '../components/CharacterList';
import { fetchID, fetchRnM } from '../services/fetchAPI';
import CharacterCard from '../views/CharacterCard';

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  // const [char, setChar] = useState({});

  const { id } = useParams();
  const { url, path } = useRouteMatch();
  console.log('url in MovieList', url); // 💡 Use url for nested links
  console.log('path in MovieList', path); // 💡 Use path for nested routes

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await fetchRnM();
      setData(resp);
      // const info = await fetchID(id);
      // setChar(info);

      setLoad(false);
    };
    fetchApi();
  }, [id]);

  if (load) return <h1>Loading</h1>;

  return (
    <>
      {data.map((item) => (
        <article key={item.id}>
          <Link to={`${url}/${item.id}`}>
            <h1>
              Name: {item.name} ({item.status})
            </h1>
          </Link>
        </article>
      ))}
      <Route path={`${path}/:id`}>
        <CharacterCard />
      </Route>
    </>
  );
}
