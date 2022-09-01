

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function SingleBook(props) {
    return(
      
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {props.book.img}/>
       
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>
            €{props.book.price}
          </Card.Text>
          <Button variant="primary">Acquista</Button>
        </Card.Body>
      </Card>
    )
}
export default SingleBook;