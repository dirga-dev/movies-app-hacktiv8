import React, { useEffect, useState } from 'react';
import pikachu from '../assets/pikachu.jpg';
import ContainerMovie from '../component/ContainerMovie/ContainerMovie';
import { movie } from '../constant/data';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const navigate = useNavigate();

  const detail = () => {
    window.scrollTo(0, 0);
    navigate(`/detail/${movie.imdbID}`);
  };

  useEffect(() => {
    const m = movie.Runtime.split(' ', 1);
    setHour(Math.floor(m / 60));
    setMinute(m % 60);
  }, []);
  return (
    <section id="home">
      <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${pikachu})` }}>
        <div className="bg-gradient-to-b from-transparent to-secblack w-full h-screen" />
      </div>
      <div className="w-full flex items-center absolute top-0">
        <div className="container px-10 xl:px-24 py-4">
          <div className="h-screen flex justify-between items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <h2>{movie.Genre}</h2>
              <h1 className="text-5xl">{movie.Title}</h1>
              <p className="font-light tracking-wide">{movie.Plot}</p>

              <div className="flex items-center gap-4">
                <span>
                  IMDb : <span>{movie.imdbRating}</span>
                </span>
                <span>
                  {hour} h {minute} m
                </span>
              </div>

              <div className="w-fit mt-8 relative">
                <button onClick={detail} className="text-primary px-6 py-2 border border-primary bg-transparent rounded-sm transition-all ease-in-out duration-300 hover:bg-white">
                  Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContainerMovie />
    </section>
  );
};

export default Homepage;
