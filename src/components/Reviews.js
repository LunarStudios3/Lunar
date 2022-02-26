import '../styles/reviews.css'
import Container from 'react-bootstrap/Container'


function Reviews (){
 
   const CustReview = [
       {
           client: "Jeshaun Chrite",
           review: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!",
       },
   ]

   return(
   <Container fluid className="reviews">
       {CustReview.map((object, i)=>{
           return(
               <div className="reviewText">
               <p>{object.review}</p>
               <p>-- {object.client}</p>
               </div>
               
           )
       })}
   </Container>)
    
}

export default Reviews