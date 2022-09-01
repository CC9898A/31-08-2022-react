
import Alert from 'react-bootstrap/Alert';



function WarningSign(props) {
  const name = props.name;
 
  

    return(
     


<Alert variant="danger">
      <Alert.Heading>Messaggio di errore</Alert.Heading>
      <p>
       Errore:
      </p>
      <hr />
      <p className="mb-0">
     {name}
      </p>
    </Alert>

    )
}
export default WarningSign;