import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent name="KDT3rd" students={100} />
      <hr />

      <FuncComponent name="KDT3기" students={25} />
      <hr />

      <Button link="https://www.google.com">구글</Button>
      <Button link="https://www.daum.net">다음</Button>
      <Button></Button>
    </div>
  );
}

export default App;
