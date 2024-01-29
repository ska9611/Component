import React, { useState } from 'react';
import './Input.css'; // 스타일 시트를 불러옵니다.
import TypesExample from './TypesExample';

// const Input = () => {
//   const [ID, setID] = useState('');
//   const [password, setPassword] = useState('');

//   const handleIDChange = (event) => {
//     setID(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   return (
//     <div className="input-container">
//       {'     '}
//       {/* 스타일을 적용하기 위한 컨테이너 div */}
//       <label htmlFor="ID">ID:</label>
//       <input
//         type="text"
//         id="ID"
//         value={ID}
//         onChange={handleIDChange}
//         className="input-field" // 스타일을 적용하기 위한 클래스 추가
//       />
//       <br />
//       <label htmlFor="password">비밀번호:</label>
//       <input
//         type="password"
//         id="password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <br />
//       <TypesExample />

//       {/* 로그인 버튼 */}
//     </div>
//   );
// };

const Input = () => {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  const handleIDChange = (event) => {
    setID(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="input-container">
      {'     '}
      {/* 스타일을 적용하기 위한 컨테이너 div */}
      <label htmlFor="ID">이메일:</label>
      <input
        type="text"
        id="ID"
        value={ID}
        onChange={handleIDChange}
        className="input-field" // 스타일을 적용하기 위한 클래스 추가
      />
      <br />
      <label htmlFor="password">비밀번호:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />
      <TypesExample ID={ID} password={password} />{' '}
      {/* ID와 password를 props로 전달 */}
    </div>
  );
};

export default Input;
