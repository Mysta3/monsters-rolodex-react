import { Component } from 'react';
import './searchBox.style.css';

class SearchBox extends Component {
  
  render(){
    const { onChangeHandler,placeholder, className } = this.props;
    return (
      <input 
        className={className} 
        type="search" 
        placeholder={placeholder} 
        onChange={onChangeHandler}
      />
    )
  }
}

export default SearchBox;