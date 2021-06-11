import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

export class Header extends Component {
  render() {
    const lineStyle = {
      height: '5px',
      borderWidth: '100',
      color: 'black',
      backgroundColor: 'black'

    }
    return (
      <>
        <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/personlaize">personlaize</Nav.Link>
          </Nav.Item>
        </Nav>
        <hr style={lineStyle} />
      </>
    )
  }
}

export default Header
