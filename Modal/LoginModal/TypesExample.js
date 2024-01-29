// import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';
// import StaticExample from './modal';

// function TypesExample() {
//   const [showModal, setShowModal] = useState(false);
//   const [showModal2, setShowModal2] = useState(false);

//   const handleLogin = () => {
//     // 로그인 처리를 수행하는 함수
//     setShowModal(true);
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleLogin}>
//         로그인
//       </Button>{' '}
//       {showModal && <StaticExample onClose={() => setShowModal(false)} />}{' '}
//       {/* 모달 */}
//     </>
//   );
// }

// export default TypesExample;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import StaticExample from './modal';
import StaticExample2 from './modal2';
import StaticExample3 from './modal3';

function TypesExample({ ID, password }) {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false); // 새로 추가한 모달 상태

  const handleLogin = () => {
    // ID, 비밀번호 유효성 검사 및 모달 표시
    if (!ID.includes('@')) {
      setShowModal1(true); // ID에 '@'가 없으면 모달1 표시
    } else if (password.length < 8 || password.length > 16) {
      setShowModal2(true); // 비밀번호 길이가 조건에 맞지 않으면 모달2 표시
    } else {
      // ID와 비밀번호가 조건에 모두 맞으면 모달3 표시
      setShowModal3(true);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleLogin}>
        로그인
      </Button>{' '}
      {showModal1 && <StaticExample onClose={() => setShowModal1(false)} />}
      {showModal2 && <StaticExample2 onClose={() => setShowModal2(false)} />}
      {showModal3 && (
        <StaticExample3 onClose={() => setShowModal3(false)} />
      )}{' '}
      {/* 모달3 */}
    </>
  );
}

export default TypesExample;
