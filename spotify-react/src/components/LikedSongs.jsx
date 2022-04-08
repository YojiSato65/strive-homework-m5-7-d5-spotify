import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import {connect} from 'react-redux'

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({

})

class LikedSongs extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <ListGroup>
                           {/*  {
                                this.props.favorites.map(() => (
                                    <ListGroupItem>
                
                                    </ListGroupItem>
                                ))
                            } */}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

                <h1 style={{color:"black", fontSize:"76px", marginLeft: "300px"}}>Title</h1>
            </div>

          
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs)