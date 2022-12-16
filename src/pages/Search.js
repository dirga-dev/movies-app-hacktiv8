import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardMovie from '../component/CardMovie/CardMovie';
import { getSearch } from '../redux/features/movieSlice';

const Search = () => {
  const { movieSearch } = useSelector((store) => store.movie);
  const { s } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch(s));
  }, [dispatch, s]);
  return (
    <section className="bg-secblack min-h-screen pt-20 pb-28" id="movies">
      <div className="container px-10 xl:px-24 py-4 ">
        {movieSearch && <h3 className="text-white text-3xl py-10 text-center uppercase">{s}</h3>}
        {movieSearch ? (
          <div className="flex flex-col">
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">{movieSearch && movieSearch.map((movie, index) => <CardMovie movie={movie} key={index} />)}</div>
          </div>
        ) : (
          <div className="min-h-[75vh] flex justify-center items-center">
            <h1 className="font-montserrat text-base text-white tracking-wide">
              Movie <span className="font-semibold capitalize">{s}</span> Not Found
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
