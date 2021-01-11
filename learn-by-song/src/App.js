import logo from './logo.svg';
import ReactPlayer from "react-player"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn Mandarin from the lyrics of popular songs at karaoke.
        </p>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=IFTZtuXKzFs"
          />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
