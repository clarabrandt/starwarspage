import React, { Component } from 'react'
import "./Content.css"

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <div className='content-headline'>Search for the characters of you favorite Star Wars movie! </div>
        <div className='content-headline'>Search by the title or episode! </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className='content-searchBox'>Input word(s) from Star Wars movie title:</div>
            <input type="text" name="name" />
          </label>
          <button type="submit" value="" >Send</button>
        </form>
      </div>
    )
  }
}