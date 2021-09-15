import Container from 'react-bootstrap/Container'
import '../styles/landing.css'
import Video from '../assets/LunarLanding.mp4'

function Landing (){
    return(
        <Container fluid id="Video">
            <video loop muted autoPlay className="backgroundVideo">
                <source src={Video} type="video/mp4" />
                {console.log("Hello")}
            </video> 
            
            <img className="landingLogo" src="https://i.imgur.com/3KlQtZ7.png" alt="Lunar Studios"/>
            <div className='topAbout'>
            </div>
            
        </Container>
    );
}

export default Landing