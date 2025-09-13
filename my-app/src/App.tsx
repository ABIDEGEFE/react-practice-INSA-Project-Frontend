import './App.css';
import { useButton } from './Component/useButton';
import {Counter} from './Component/Counter';


function App() {
  return (
    <div className="App">
      {useButton()}
      <Counter />
    </div>
  );
}

export default App;