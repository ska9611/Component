import Modal from 'react-bootstrap/Modal';

function StaticExample3({ onClose }) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>로그인 성공</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>로그인 성공</p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample3;
