import React, { Component } from 'react'
import "./Layout.css";
import Banner from './Banner'
import Content from './Content'


class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Banner />
        <Content />
      </div>
    )
  }
}


export default Layout