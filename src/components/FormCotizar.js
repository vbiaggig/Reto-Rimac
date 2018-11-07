import  React  from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';


export default () => {
 return (
   <Container>
     <Row>
       <Col md="6">
         <Card>
           <CardBody>
             <form>
               <p className="h4 text-center py-4">Mi información</p>
               <div className="grey-text">
                 <Input label="DNI" group type="text" validate error="wrong" success="right" />
                 <Input label="Nombres" group type="text" validate error="wrong" success="right" />
                 <Input label="Apellidos" group type="text" validate error="wrong" success="right" />
                 <Input label="Celular" group type="text" validate error="wrong" success="right"/>
                 <Input label="Email" group type="text" validate error="wrong" success="right"/>
                 <Input label="Dirección" group type="text" validate error="wrong" success="right"/>
               </div>
               <div className="text-center py-4 mt-3">
                 <Button color="cyan" type="submit">Comprar</Button>
               </div>
             </form>
           </CardBody>
         </Card>
       </Col>
     </Row>
   </Container>
 )
}