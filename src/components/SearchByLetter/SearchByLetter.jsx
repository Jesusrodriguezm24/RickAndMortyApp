import { useState } from 'react';


import './SearchByLetter.css'

const SearchByLetter = ({ dimension }) => {

  const [searchletter, setSearchLetter] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const letter = event.target.value.toLowerCase();
    setSearchLetter(letter);
    //console.log(dimension)
    const dimensionName = dimension.map((_,i) => i.name);
    const results = dimensionName.filter((elemento) =>
      elemento.toLowerCase().includes(letter)
    );
    setSearchResults(results);
  };


  return (
    <div>
        <input type="text" value={setSearchLetter} onChange={handleInputChange}
          placeholder="Ingrese una letra"/>
        <section>
            {searchResults.map((resultado, i) => (
                <option key={i}>{resultado}</option>
            ))}
        </section>
  </div>
  )
}

export default SearchByLetter