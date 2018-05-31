//import React AND it's property "Component"
import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
//Funtional componenet
/*const SearchBar = () => {
  return <input />
}*/

//Class based componenet
//Class based components have State, function based components don't
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-bar">
        <Input
          fluid
          width={16}
          icon='search'
          placeholder='Search Videos...'
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
