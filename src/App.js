import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

  function searchLyrics() {
    if (artist === "" || song === "") {
      return;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
      console.log(res.data.lyrics);
      setLyrics(res.data.lyrics);
    })
  }

  return(
    <div className="App">
      <h1>What are the Lyrics ???</h1>
      <input className="inp" type="text" placeholder="Artist" onChange={(e) => {setArtist(e.target.value)}} />
      <input className="inp" type="text" placeholder="Song" onChange={(e) => {setSong(e.target.value)}}/>
      <button className="btn" onClick={() => searchLyrics}> Find Lyrics </button>
      <hr />
      <pre>{lyrics}</pre>
    </div>
  );
}

export default App;
