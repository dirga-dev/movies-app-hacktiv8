import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import CardMovie from '../component/CardMovie/CardMovie';
import { bookmarkMovie, getDetail, unBookmarkMovie } from '../redux/features/movieSlice';

const Details = () => {
  const { movies, movieSearch, movieDetail, bookmark } = useSelector((store) => store.movie);
  const { id } = useParams();
  const dispatch = useDispatch();

  const isSaved = bookmark.find((item) => item.imdbID === movieDetail.imdbID);
  const related = movieSearch.length > 0 ? movieSearch.filter((item, index) => index <= 5 && item.imdbID !== id) : movies.filter((item, index) => index <= 5 && item.imdbID !== id);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const handleSave = () => {
    dispatch(bookmarkMovie(movieDetail));
  };
  const handleUnSave = () => {
    dispatch(unBookmarkMovie(movieDetail));
  };

  return (
    <section id="detail" className="py-28 lg:px-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <img className="rounded-xl max-h-[50rem] object-cover" src={movieDetail?.Poster} alt={movieDetail?.Title} />
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="pb-3 lg:text-3xl md:text-3xl sm:text-xl font-medium">{movieDetail?.Title}</h1>
            <div className="flex flex-col justify-center gap-4">
              <p>{movieDetail?.Genre}</p>
              <p>IMDb : {movieDetail?.imdbRating}</p>
              <p>
                {movieDetail?.Runtime?.hour} h {movieDetail?.Runtime?.minute} m
              </p>
              <p>{movieDetail?.Rated}</p>
              <p className="font-light text-secondary">
                <span className="font-medium text-white">Director:</span> {movieDetail?.Director}
              </p>
              <p className="font-light text-secondary">
                <span className="font-medium text-white">Actors : </span>
                {movieDetail?.Actors}
              </p>
            </div>
            <div className="pt-3 flex">
              {isSaved ? (
                <button onClick={handleUnSave}>
                  <HiBookmark size={32} color="#fbbf24" />
                </button>
              ) : (
                <button onClick={handleSave}>
                  <HiOutlineBookmark size={32} color="#fbbf24" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="py-8">
          <h1 className="text-xl mb-6">Description</h1>
          <p className="text-secoppacity">{movieDetail?.Plot}</p>
        </div>
        <div className="">
          <div className="flex flex-col justify-center lg:items-start items-center">
            <h1 className="text-2xl py-8">Related Movies</h1>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">{related && related.map((movie, index) => <CardMovie movie={movie} key={index} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
