import React, { Component } from 'react'
import "./Content.css"

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrderAsc: true
    };

    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(e) {
    console.log(this.state.isOrderAsc)
    e.preventDefault();
    this.setState(state => ({
      isOrderAsc: !state.isOrderAsc
    }));
  }
  render() {
    return (
      <div className='content'>
        <div className='content-headline'>Search for the characters of you favorite Star Wars movie! </div>
        <div className='content-headline'>Search by the title or episode! </div>
        <form>
          <label>
            <div className='content-searchBox'>Input word(s) from Star Wars movie title:</div>
            <input type="text" name="name" />
          </label>
          <button onClick={this.toggleButton}>
            {this.state.isOrderAsc ? 'ASC' : 'DESC'}
          </button>
        </form>
      </div>
    )
  }
}