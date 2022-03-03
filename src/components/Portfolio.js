import {Row, Col, Container, Carousel} from 'react-bootstrap'
import '../styles/portfolio.css'
function Portfolio (){
    const PortfolioArr = [
        {
            pic: "https://imgur.com/uvJKUrA.png",
            name: "Hong Kong Helper",
            title: "MHacks 12 Mobile Appliation",
            blurb: "An appliation bio explaining what the app does. It took 1st place overall and won Best Hack for Uniting the World.",
            link: "www.https://github.com"
        },
        {
            name: "Jonathan Mukes",
            title: "Backend Developer",
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            pic: "https://i.imgur.com/30PUlwN.png",

        },
        {
            name: "Margaret Mukes",
            title: "Administrator",
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            pic: "https://i.imgur.com/Qt4tW9q.png",

            
        },



    ]
    return(

        <Container fluid className='portfolio'> 
                <div className='leftTitle'><h1> <b> THE WORK </b></h1> </div>
                <Carousel className='portfolioCarousel' indicators={false}>
                {PortfolioArr.map(function(object, i){
                    return (<Carousel.Item>
                        <Row>
                            <Col className='slidePic'>
                                <img
                                    className='d-inline w-75'
                                    src={object.pic}
                                    alt='First slide'
                            
                                />
                            </Col>
                            <Col className='slideBlurb'>
                                    <h3>{object.name} </h3>
                                    <h3 className="title">{object.title}</h3>
                                    <p>{object.blurb}</p>
                                    <a href='www.github.com'>{object.link}</a>
                            </Col>

                        </Row>
                    </Carousel.Item> )
                })}
                

                </Carousel>
        </Container>
    );
}

export default Portfolio