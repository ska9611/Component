import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        서재에 보관하기
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title></Modal.Title> */}
        </Modal.Header>
        <Modal.Body>서재에 보관하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            예
          </Button>
          <Button variant="primary" onClick={handleClose}>
            아니요
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
