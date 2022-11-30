import './App.css';
import React from 'react';

function App() {
  const name = 'Sean';
  let flag = true;
  let txt = '';

  if (flag) {
    txt = 'True입니다.';
  } else {
    txt = 'False입니다.';
  }

  const styles = {
    h2: {
      backgroundColor: 'blue',
      fontSize: '40px',
      color: 'white',
    },
    p: {
      backgroundColor: 'red',
      fontSize: '40px',
      color: 'white',
    },
  };

  return (
    // JSX 문법
    // 1. 컴포넌트에 여러 요소 있으면 반드시 부모 요소 하나로 감싸야 함!
    <div className="App">
      {/* 2. {} 감싸면 자바스크립트 표현식 사용가능 */}
      {/* 3. styles 속성
        - dom 요소에 스타일 적용시 문자열 x -> "객체" 사용
        - 스타일 이름 중 하이픈(-) 포함시 camelCase 작성해야 함
      */}
      <h2 style={styles.h2}>안뇽 {name}</h2>
      <h2 style={styles.p}>안뇽 {name}</h2>
      <h2
        style={{
          backgroundColor: 'blue',
          fontSize: '40px',
          color: 'white',
        }}
      >
        안뇽 {name}
      </h2>
      <h2>{name === 'Sean' ? '반가워' : '누구..?'}</h2>
      <p>{txt}</p>
      <p>{flag ? <h3>true임</h3> : <h3>false임</h3>}</p>
      <p>{flag && <h3>true 일때만 보이는 메세지</h3>}</p>
      {/* 4. className 사용
        - class 속성이 아닌 className 속성을 사용
      */}
      <h3 className="hello" onClick={() => alert('안녕안녕')}>
        hello~~~~~~
      </h3>
      {/* 5. 종료 태그가 없는 태그의 사용
        - 기존 html 태그에서 종료태그가 없더라도 종료태그를 작성해야 함
        - or self-closing  
        - 잘못된 예) <input>, <br>
        - 올바른 예) <input></input>, <br />
        */}
      {/* 6. 주석
        - //: jsx 외부 주석
        - jsx 내부 주석
      */}
    </div>
  );
}

export default App;
