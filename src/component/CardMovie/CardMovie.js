import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardMovie = ({ movie }) => {
  const { Title, Poster, Genre, imdbID } = movie;
  const navigate = useNavigate();
  const handleDetail = () => {
    window.scrollTo(0, 0);
    navigate(`/detail/${imdbID}`, { replace: true });
  };
  return (
    <div className="w-full relative rounded-sm overflow-hidden transition-all ease-in-out duration-300 hover:scale-110 hover:cursor-pointer" onClick={handleDetail}>
      <img src={Poster} alt={Title} className="w-full h-96 flex-1 object-cover" />
      <div className="flex flex-col justify-center items-center py-4 flex-1">
        <h4 className="text-white">{Title}</h4>
        <p className="text-sm text-secoppacity">{Genre}</p>
      </div>
    </div>
  );
};

export default CardMovie;
