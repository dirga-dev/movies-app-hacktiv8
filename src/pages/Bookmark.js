import React from 'react';
import { useSelector } from 'react-redux';
import CardMovie from '../component/CardMovie/CardMovie';

const Bookmark = () => {
  const { bookmark } = useSelector((store) => store.movie);

  return (
    <section className="bg-secblack min-h-screen pt-20 pb-28" id="bookmark">
      <div className="container px-10 xl:px-24 py-4 ">
        <h3 className="text-white text-3xl py-10 text-center uppercase">Watch List</h3>
        <div className="flex flex-col">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">{bookmark && bookmark.map((movie, index) => <CardMovie movie={movie} key={index} />)}</div>
        </div>
      </div>
    </section>
  );
};

export default Bookmark;
