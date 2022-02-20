import { Col, Row, Container } from 'react-bootstrap';
import '../styles/about.css'


function About (){
    return(
        <Container fluid className='about'>
            <Row className='aboutRow'>
                <Col className='leftBox' xs={4}>
                    <h1>LETS</h1> 
                    <h1>CREATE</h1> 
                    <h1>TOGETHER</h1>
                </Col>
                <Col className='middleBox' xs={2}><div className='vl'></div></Col>
                <Col className='rightBox' xs={6}>
                    <p>
                        Creating your own opportunities and having the power to create and surround 
                        yourself with a great community is a great start to success. Lunar Studios was 
                        created to do just that. We came together with friends in a small dorm room, 
                        eager to make our mark in software engineering. Along the way, we found wonderful 
                        small businesses with a need to make their own mark and stand out in the digital 
                        marketplace, and a need for diversity. 
                    </p>
                    <p>
                        Lunar Studios then solidified in a small but effective team of web developers and 
                        designers with a mission to provide the Metro-Detroit area’s small businesses sleek 
                        with websites and branding that could rival any major national conglomerate. We offer
                        our collective resources, expertise, and solution based design products with the purpose 
                        of growing our communities and others across the nation.
                    </p>
                </Col>
            </Row>
        </Container>
        
    );
}

export default About