import { useState, useEffect } from 'react';
import CardList from './components/card-list/cardList.component';
import SearchBox from './components/search-box/searchBox.component';
import './App.css';


// Functional Component

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
      // eslint-disable-next-line
    }, []);


  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilteredMonsters);
      // eslint-disable-next-line
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }



  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex React App</h1>
      <SearchBox className='search-box' placeholder='search monsters' onChangeHandler={onSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}

export default App;
