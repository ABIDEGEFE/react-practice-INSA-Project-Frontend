import './App.css';
import LoginPage from './Component/LoginPage';
import { AuthProvider } from './Component/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
      
    </div>
  );
}

export default App;