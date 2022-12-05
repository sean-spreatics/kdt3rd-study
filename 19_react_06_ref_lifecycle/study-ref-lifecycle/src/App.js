import './App.css';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
// import RefSample1 from './RefSample1';
// import RefSample2 from './RefSample2';

function App() {
  return (
    <div className="App">
      {/* <RefSample1 />
      <hr />

      <RefSample2 />
      <hr /> */}

      <LifeCycleFunc />
      <hr />

      <LifeCycleClass />
    </div>
  );
}

export default App;
