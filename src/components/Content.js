import React, {useState} from 'react';
import axios from 'axios';

const Content = () =>{
  const [movie, setMovie] = useState([]);

  const fetchMovie = () =>{
    axios.get("https://www.omdbapi.com/?s=fire&apikey=d8d09f5d")
    .then((response)=>{
      console.log(response);
      setMovie(response.data.Search)
    })
  }
  return (
    <>
    <button onClick={fetchMovie}>Fetch Movie</button>

    {
      movie.map((value,index)=>{
        return(
          <h3 key={index}>{value.Title}</h3>
        );
      })
    }
    </>
  )
}

export default Content;