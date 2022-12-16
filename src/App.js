import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Bookmark from './pages/Bookmark';
import Details from './pages/Details';
import Homepage from './pages/Homepage';
import Search from './pages/Search';
import { getMovies } from './redux/features/movieSlice';

function App() {
  const { movies } = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovies());
    }
  }, [dispatch, movies]);

  return (
    <div className="bg-secblack">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="detail/:id" element={<Details />} />
        <Route path="search/:s" element={<Search />} />
        <Route path="bookmark" element={<Bookmark />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
