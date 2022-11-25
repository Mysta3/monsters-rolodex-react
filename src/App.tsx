import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/cardList.component';
import SearchBox from './components/search-box/searchBox.component';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

// Functional Component

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users);
    }

    fetchUsers();
  // eslint-disable-next-line
  }, []);


  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilteredMonsters);
      // eslint-disable-next-line
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
