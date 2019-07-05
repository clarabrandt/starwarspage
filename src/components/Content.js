import React, { Component } from 'react'
import "./Content.css"

export default class Content extends Component {

  baseUrl = "htts://localhost:3001/api/search?q=";

  constructor(props) {
    super(props);
    this.state = {
      value: 'force',
      order: 'ASC',
      people: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.searchData = this.searchData.bind(this);
    this.renderList = this.renderList.bind(this);
  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  toggleButton(e) {
    e.preventDefault();
    if (this.state.order === 'ASC') {
      this.setState({
        order: 'DESC'
      })
    } else {
      this.setState({
        order: 'ASC'
      })
    }
  }

  searchData = () => {
    const endpoint = `http://localhost:3000/api/search?q=${this.state.value}&order=${this.state.order}`;
    return fetch(endpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => (response.json()))
      .then(data => {
        this.setState({
          people: data.result
        })
      })
  }

  renderList() {
    const { people } = this.state;
    return (
      <div>
        {
          this.state.people &&
          people.map(person => {
            return (
              <div className=''>
                {`${person.name} - ${person.height}`}
              </div>
            )
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div className='content'>
        <div className='content-headline'>Want to know what are the characters on each Star Wars movie? </div>
        <div className='content-headline'>Search using a word from the title your favorite episode! </div>
        {
          <>
            <label className='content-input'>
              <div className='content-input--title'>Search word</div>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="search" onClick={this.searchData} />
            <button onClick={this.toggleButton}>
              {this.state.order}
            </button>
          </>
        }
        <div className='content-list'>
          {this.renderList()}
        </div>
      </div>
    )
  }
}
