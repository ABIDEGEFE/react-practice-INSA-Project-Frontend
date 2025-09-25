import './App.css';
import LoginPage from './Component/LoginPage';
import { AuthProvider } from './Component/AuthContext';
import { UserPage } from './Component/UserPage';
import { AdminPage } from './Component/AdminPage';
import { ProtectedRoute } from './Component/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />}/> 
          <Route path='/admin' element={
            <ProtectedRoute requiredRole='admin'>
                <AdminPage />
            </ProtectedRoute>
          }
          />

          <Route path='/user' element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
      </AuthProvider>


      
    </div>
  );
}

export default App;