
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import fantasy from "../src/fantasy.json"
import AllBook from './components/AllBook';

function App() {
  return (
    <div className="App">
      <WarningSign name="error not found"></WarningSign>
      <MyBadge title="SingleBook"></MyBadge>
      <SingleBook book={fantasy[0]}></SingleBook>
      <hr></hr>
      <h2>AllBook</h2>
      <AllBook books={fantasy}></AllBook>
    </div>
  );
}

export default App;
