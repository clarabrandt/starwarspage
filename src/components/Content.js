import React, { Component } from 'react'
import "./Content.css"

export default class Content extends Component {

  baseUrl = "htts://localhost:3001/api/search?q=";

  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
      }, this.searchData)
    } else {
      this.setState({
        order: 'ASC'
      }, this.searchData)
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
      <div className='content-list--items'>
        <div className='content-list--items-item'>
          <div className='content-list--items-name bold'>Name</div>
          <div className='content-list--items-height bold clickable' onClick={this.toggleButton}>Height &#x25B2;&#x25BC;</div>
        </div>
        {
          this.state.people &&
          people.map(person => {
            return (
              <div className='content-list--items-item'>
                <div className='content-list--items-name'>{person.name}</div>
                <div className='content-list--items-height'>{person.height}</div>
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
        <div className='content-headline'>
          <h3>Want to know what are the characters on each Star Wars movie?</h3>
          <h4>Search using a word from the title your favorite episode!</h4>
        </div>
        <div className='content-body'>
          <div className='content-form'>
            <label className='content-input'>
              <input className='content-input--field' placeholder="search term" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input className='content-input--button' type="submit" value="search" onClick={this.searchData} />
          </div>
        </div>
        <div className='content-list'>
          {this.renderList()}
        </div>
      </div>
    )
  }
}
