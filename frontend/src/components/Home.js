

import { Form, Button, Navbar, Nav, Container, Carousel } from 'react-bootstrap';
function Home() {
  return (
    <div>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="headphone.png"
            alt="First slide"
            style={{ height: 615}}
          />
                 </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="perfume_1.png"
            alt="Second slide"
            style={{ height: 615 }}
          />
                 </Carousel.Item>
        <Carousel.Item>
        
          
            <img
              className="d-block w-100"
              src="iphone.jpg"
              alt="Third slide"
              style={{ height: 615 }}
            />
            </Carousel.Item>
        
          <Carousel.Item>
        
            <img
              className="d-block w-100"
              src="Sunglasses.jpg"
              alt="Fourth slide"
              style={{ height: 615 }}
            />
                      </Carousel.Item>
    
          
        
      </Carousel>




    </div >
  );
}

export default Home;