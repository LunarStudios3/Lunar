import {Row, Col, Container, Carousel} from 'react-bootstrap'

import '../styles/team.css'
function Team (){
    return(
        <Container fluid className='teamMeet'> 
            <div className='topTeam'></div>
            <div className='teamStars'></div>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <img
                                className="d-block w-50"
                                src="https://i.imgur.com/KIJD1JC.png"
                                alt="First slide"
                        
                            />
                        </Col>
                        <Col>
                            <Carousel.Caption>
                                <h3>VANESSA MUKES </h3>
                                <h3>FRONT END DEVELOPER</h3>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Team