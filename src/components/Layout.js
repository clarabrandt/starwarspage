import React, { Component } from 'react'
import "./Layout.css";
import Banner from './Banner'


class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Banner />
      </div>
    )
  }
}


export default Layout