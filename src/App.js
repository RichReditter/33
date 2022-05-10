import React from "react";
import "./App.css";
import Search from "./Search.js";
import Digits from "./Digits.js";

function App() {
  // const [enteredText,setText] = useState('')
  return (
    <React.Fragment>
      <div>
        Поиск
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Digits />
      </div>
    </React.Fragment>
  );
}

export default App;
