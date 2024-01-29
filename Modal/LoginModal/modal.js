import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function StaticExample({ onClose }) {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={onClose}>
          <Modal.Title>로그인 정보 오류</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>ID를 정확하게 입력해 주세요</p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;
