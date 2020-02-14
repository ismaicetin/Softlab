import React from 'react';   
import Router from '../../Router';
import {Container  } from 'react-bootstrap'; 
function App() {
  return (
    <div className="main-content d-flex  flex-column w-100 page" style={{    overflow: "auto" ,height: "100vh" }}>
       <div style={{flex: "1 0 auto"}}  >
          <Container fluid={true} className="container-content">
              <div className="page-box">
                <Router/> 
              </div>
          </Container>
      </div> 
    </div>
  );
}

export default App;
