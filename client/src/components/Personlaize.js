import axios from 'axios';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
export class Personlaize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: [],
      name: '',
      slug: '',
      showUpdateForm: false,
    }
  }
  componentDidMount = async () => {
    const getData = await axios.get(`${process.env.REACT_APP_SERVER_URL}/character/personalize`)
    this.setState({
      pageData: getData.data,
    })
  }
  deleteItem = async (slug) => {
    const getData = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/character/personalize/${slug}`)
    this.setState({
      pageData: getData.data
    })
  }
  updateItem = async (e) => {
    e.preventDefault();
    const bodyData = {
      name: this.state.name
    }
    const getData = await axios.put(`${process.env.REACT_APP_SERVER_URL}/character/personalize/${this.state.slug}`, bodyData)
    this.setState({
      pageData: getData.data
    })
    this.setState({
      name: 'mahmood'
    })
    console.log(this.state.name);
    console.log(getData.data);
  }
  updateName = async (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value })

  }
  updateSlug = async (slug) => {
    this.setState({ slug: slug, showUpdateForm: true })

  }





  render() {
    const styling = {
      width: '10%',
      hight: '10%'
    }
    const rendering = <Row xs={1} md={4} className="g-4">
      {this.state.pageData.map((data, idx) => {
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
                <Button onClick={() => this.deleteItem(data.slug)} variant="danger">Delete </Button>
                <Button onClick={() => this.updateSlug(data.slug)} variant="primary">Update</Button>
              </Card>
            </Col>
          </div>
        )

      })}
    </Row>
    return (
      <>
        {
          this.state.showUpdateForm &&
          <Form onSubmit={(e) => this.updateItem(e)}>
            <Form.Control onChange={this.updateName} type='text' />
            <Button variant="primary" type='submit' value='Update'>Update</Button>
          </Form>


        }


        {rendering}
      </>
    )
  }
}

export default Personlaize
