import React from 'react';
import { useEffect } from 'react';
import { fetchID, fetchRnM } from '../services/fetchAPI';

export default function CharacterCard() {
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const info = await fetchID(id);
      setChar(info);
    };
    fetchCharacter();
  }, [id]);

  return <div>CharacterCard</div>;
}
