import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainData: [],
      serverURL: process.env.REACT_APP_SERVER_URL
    }
  }
  componentDidMount = async () => {
    const fitchData = await axios.get(`${this.state.serverURL}/character`);
    this.setState({
      mainData: fitchData.data
    })
  }
  saveItem = async (Item) => {
    console.log(Item);
    await axios.post(`${this.state.serverURL}/character/personalize`, Item);
  }
  render() {
    const styling = {
      width: '20%',
      hight: '20%'
    }
    return (
      <Row xs={1} md={4} className="g-4">
        {this.state.mainData.map((data, idx) => {
          return (
            <div key={idx}>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Img src={data.img} alt='' />
                    <Row>
                      {data.psiPowers.map(data => {
                        return (<>
                          <Col>
                            <Card.Title>{data.name}</Card.Title>{' '}
                            <Card.Img src={data.img} alt='' style={styling} />{' '}
                          </Col>
                        </>)
                      })
                      }
                    </Row>
                  </Card.Body>
                  <Button onClick={() => this.saveItem(data)} variant="primary">Add To Favorite</Button>
                </Card>
              </Col>
            </div>
          )

        })}
      </Row>
    )
  }
}
export default Main
