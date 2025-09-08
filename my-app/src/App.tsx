import './App.css';
import Demo from './Component/index'; // Import the Demo component
import { Sidebar } from './Component/Components';


function App() {
  return (
    <div className="App">
      <Demo /> {/* This wraps Sidebar and Profile with context */}
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;