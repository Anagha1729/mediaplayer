import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {
  const navigateByUrl=useNavigate()
  const clickNavigate=()=>{
    navigateByUrl('/home')
  }

  return (

    <div>
      <Row className='mt-5 mb-3 align-item-center'>
        <Col></Col>
        <Col md='4'>
          <h2 className='mb-3' >Welcome to<span className='text-danger'>Media Player.com</span></h2>
          <p className='text-light' style={{textAlign:'justify' }}>
          A media player is a program or hardware device capable of playing a media file or disc. For example, many media players today can play audio files, such as MP3 song and video files such as a short video clip or movie. Below are some of our favorite media players. The image is a visual example of the Microsoft Windows Media player.
          </p>
          <button className='btn btn-success' onClick={clickNavigate}>Get Started</button>
        </Col>
        <Col></Col>
        <Col md='5'>
          <img className='img-fluid' style={{height:'200px',width:'300px',marginLeft:'60px'}} src="https://th.bing.com/th/id/OIP.Z6a7E8-rjp25gXWFz1lDKAHaHq?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  alt='banner'></img>
        </Col>
      </Row>
      <div className='mt-5 ms-2 mb-5'>
        <h2 className='text-center'>Features</h2>
    <div className='d-flex justify-content-around mt-5' style={{flexWrap:'wrap'}}>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.bing.com/th/id/OGC.607bd3a8bafdea788c199fcafde1de7d?pid=1.7&rurl=https%3a%2f%2fredtechnologiesinc.com%2fwp-content%2fuploads%2f2018%2f09%2fvideo-icon-gif2.gif&ehk=FM0Gczp9VPwHg7%2bBqqHBYeibx%2fHdiK%2ffe9SBFqHio5s%3d" height={'200px'} />
      <Card.Body>
        <Card.Title className='text-center'>Manage Videos</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
        </Card>
   
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://www.bing.com/th/id/OGC.8ec8997f757addbcb87c6c050162ab47?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f93%2fa4%2f39%2f93a439f02fed8676fb281e461bbde801.gif&ehk=RCpiZMH92RFq9InUXQjsMJzZwur8kelf7FHOGUCBHFU%3d" height={'200px'} />
      <Card.Body>
        <Card.Title className='text-center'>Upload Videos</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       </Card.Body>
    </Card>
   
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.bing.com/th/id/OGC.bde3272dff16bcb7cf494e8261c1ae3b?pid=1.7&rurl=https%3a%2f%2fwww.esri.com%2farcgis-blog%2fwp-content%2fuploads%2f2022%2f04%2freal-time-animated.gif&ehk=GYO%2f823hxaPhh4o5UvJd9ASHzXaCxybY4KJVsLSGXd8%3d"height={'200px'}  />
      <Card.Body>
        <Card.Title className='text-center'> Watch History</Card.Title>
        <Card.Text style={{textAlign:'justify'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        </Card.Body>
       </Card>
    </div>  
</div>

  <div className='border p-5 border-success rounded mx-3 mt-5 mb-5'>
    <Row>
      <Col>
      <h1>Simple Fast and Powerfull</h1>
      <p style={{textAlign:'justify'}}> A media player is a program or hardware device capable of playing a media file or disc. For example, many media players today can play audio files, such as MP3 song and video files such as a short video clip or movie. Below are some of our favorite media players. The image is a visual example of the Microsoft Windows Media player.
            </p>
    </Col>
    <Col>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/th_aRJ2EQT4?si=cfsdWr8dJwltwN7_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Col>
    </Row>
  
</div>
    </div>
  )
}
export default Landing