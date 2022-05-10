import React, { useState } from "react";
import './Search.css'
const randomText = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  "when an unknown printer took a galley of type and",
  "scrambled it to make a type specimen book.",
  "It has survived not only five centuries,",
  " but also the leap into electronic typesetting,",
  "remaining essentially unchanged. ",
  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
  "and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
];
function Search() {
  const [inputData, setInputData] = useState("");

  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setInputData(event.target.value);
          }}
          placeholder="Enter Post Title"
        ></input>
      </div>
      <div>
        {randomText
          .filter((li) => {
            if (inputData === "") {
              return li;
            } else if (li.toLowerCase().includes(inputData.toLowerCase())) {
                return li;
            }
          })
          .map((li, index) => {
              let splitted = inputData.split('');
              for(let i = 0; i < splitted.length; i++) {
                console.log(splitted[i], li.split('')[i]);
                  if(splitted[i] === li.split('')[i]){
                      li.replaceAll(li.split('')[i],<span className="findedText">{li.split('')[i]}</span>)
                      console.log(li)
                  }
              }
            return (
              <div>
                <li key={index}>{li}</li>

              </div>
              
            );
            
          })}
          
      </div>
    </React.Fragment>
  );
}

export default Search;
