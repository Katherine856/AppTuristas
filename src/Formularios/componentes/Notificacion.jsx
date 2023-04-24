import {Toast, ToastContainer} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Notificacion({ onClose, show, delay, nombre, id  }) {
  return (
    <ToastContainer position={'middle-center'}>
      <Toast onClose={onClose} show={show} delay={delay} bg={'light'} autohide>
        <Toast.Header>
          <strong className="me-auto">Servicio</strong>
        </Toast.Header>
        <Toast.Body>El servicio <Link to={`/servicio/${id}`}>{nombre}</Link> fue agregado correctamente</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export {Notificacion};