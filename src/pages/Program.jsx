import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Program() {
  const a="hi"
  return (
  
  <div>
     <Header/>

  <div className="container  ">
   
    <h1 className='text-danger ' style={{fontSize:"75px",fontWeight:"bolder",opacity:'0.4'}} >WHAT WE OFFER...</h1>
   <div className="cards row mt- mb-5">
   <div className="col-lg-4 mt-3">
    <Link to={`/play/chest`}>
        <Card className="chest bg-dark text-white">
          <Card.Img src="https://img.freepik.com/free-photo/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-background_613910-5209.jpg?size=626&ext=jpg&ga=GA1.1.1005471752.1689835221&semt=ais" alt="Card image" />
          <Card.ImgOverlay>
          <Card.Title>CHEST</Card.Title>
          <Card.Text>
          Performing chest exercises, such as push-ups and bench presses, can help increase the strength and definition of your chest muscles.
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>

   </Link>
    
    </div>
    <div className="col-lg-4 mt-3">
    <Link to={`/play/back`}>
    <Card className="shoulder bg-dark text-white">
      <Card.Img className='image' src="https://c4.wallpaperflare.com/wallpaper/150/221/189/man-back-workout-bodybuilding-wallpaper-preview.jpg" height={"290px"} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>BACK workout</Card.Title>
        <Card.Text>
        By strengthening your spine, shoulders and core, the back exercises below will improve strength and begin to erase the strain
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>
    </Link>
 
    </div>
    <div className="col-lg-4 mt-3">
   <Link to={'/play/shoulder'}>
   <Card className="shoulder bg-dark text-white">
      <Card.Img src="   https://t3.ftcdn.net/jpg/01/15/80/06/240_F_115800678_nTCFg8NPAXANJbSppb1X8pXGA3FqtrkW.jpg" height={"290px"} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>SHOULDER</Card.Title>
        <Card.Text>
        Strengthening the muscles around the shoulder joint helps maintain good shoulder health. 
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
   </Link>
    </div>
   </div>

   <div className="row mt-5">
   <div className="col-lg-6">
   <Link to={'/play/leg'}>
   <Card className="leg bg-dark text-white">
      <Card.Img src="   https://media.istockphoto.com/id/1342504672/photo/a-man-doing-a-leg-press-at-the-gym.jpg?s=612x612&w=0&k=20&c=H7Qe7BuHcnNg1x60qLgzAv0WfvHjZEtQDExEuu-64Cs=" height={"450px"} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>LEG & FOREARM</Card.Title>
        <Card.Text>
        Maintains good body symmetry.
Prevents osteoporosis and maintains good bone health.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
   </Link>
    </div>
    <div className="col-lg-6">
   <Link to={'/play/biceps'}>
   
   <Card className="biceps bg-dark text-white">
      <Card.Img src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/workout/30-day-arm-workout.jpg" height={"450px"} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>BICEPS & TRICEPS</Card.Title>
        <Card.Text>
        The biceps are located on the front of the upper arm and provide arm flexion, while the triceps are found on the back of the upper arm and are responsible for arm extension.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
   </Link>
    </div>
    <img src="" alt="" />
    
   </div>
  </div>
  <Footer/>
  </div>



    )
}

export default Program