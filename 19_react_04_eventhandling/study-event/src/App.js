import './App.css';
import ClassBind from './ClassBind';
import NumberTest from './NumberTest';
import SyntheticEvent from './SyntheticEvent';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />

      <NumberTest />
      <hr />

      <ClassBind />
    </div>
  );
}

export default App;
