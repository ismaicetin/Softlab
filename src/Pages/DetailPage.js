import React, { useContext } from 'react'
import { Row, Col,   Card,  Container} from 'react-bootstrap'
  
import { DataContext } from "../Context/DataContext"




function DetailPage({ isOpen, toggle }) {
    const DataContexts = useContext(DataContext);
 



    return (
        <Container>
            <Row>
                {DataContexts.Datalar.length === 0 ?
                    <Col xs={12}  >
                        Yakın Yer Bulunamadı
                </Col>
                    : 
                    DataContexts.Datalar.map(item => { 
                        return (<Col xs={12}  md={6} lg={4}  className="mb-2" key={item.venue.name} >
                            <Card  >
                              
                                <Card.Body>
                                    <Card.Title>{item.venue.name}</Card.Title>
                                    <Card.Text>
                                     {item.venue.location&&`location lat:${item.venue.location.lat}`  }
                                    {item.venue.location&& `location lng:${item.venue.location.lng}`   }
                                </Card.Text>
                                 
                                </Card.Body>
                            </Card>
                        </Col>)
                    })

                }
            </Row>
        </Container>
    );
}

export default DetailPage;
