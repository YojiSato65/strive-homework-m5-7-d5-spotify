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
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                        {
                            this.props.favorites.map(() => (
                                <ListGroupItem>

                                </ListGroupItem>
                            ))
                        }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs)