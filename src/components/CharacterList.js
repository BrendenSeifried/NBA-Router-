import React, { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import { fetchRnM } from '../services/fetchAPI';
import CharacterCard from '../views/CharacterCard';

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const { id } = useParams();
  const { url, path } = useRouteMatch();
  console.log('url in MovieList', url);
  console.log('path in MovieList', path);

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await fetchRnM();
      setData(resp);

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
