import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample2({ onClose }) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>비밀번호 오류</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>비밀번호는 8~16자리까지 가능합니다</p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample2;
