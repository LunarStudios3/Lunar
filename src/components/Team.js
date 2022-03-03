import {Row, Col, Container, Carousel} from 'react-bootstrap'
import '../styles/team.css'
function Team (){
    const PeopleArr = [
        {
            name: "Vanessa Mukes",
            title: "Front-End Developer",
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            pic: "https://i.imgur.com/KIJD1JC.png",
            skills: [{
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"},]
        },
        {
            name: "Jonathan Mukes",
            title: "Backend Developer",
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            pic: "https://i.imgur.com/30PUlwN.png",
            skills: [{
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"},]
        },
        {
            name: "Margaret Mukes",
            title: "Administrator",
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            pic: "https://i.imgur.com/Qt4tW9q.png",
            skills: [{
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"},]
            
        },
        {
            name: "Joe Brown",
            title: "Backend Developer",
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            pic: "https://i.imgur.com/zJ9uHvC.png",
            skills: [{
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"},]


        },
        {
            name: "Althea Bullock",
            title: "Graphic Designer",
            blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            pic: "https://i.imgur.com/PZokSbB.png",
            skills: [{
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"
            }, {
                skill: "some skill", 
                img: "img url"},]

        },

    ]
    return(

        <Container fluid className='teamMeet'> 
            <div className='teamStars'>
                <div className='leftHeader'><h1> <b> MEET THE TEAM </b></h1> </div>
                <Carousel className='teamCarousel' indicators={false}>
                {PeopleArr.map(function(object, i){
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
                            </Col>
                            <Col>
                            {object.skills.map(function(object, i){
                                //col shit here
                                <img src={object.skill} alt="skill logo"/>
                            })}
                            </Col>
                        </Row>
                    </Carousel.Item> )
                })}
                

                </Carousel>
            </div>
        </Container>
    );
}

export default Team