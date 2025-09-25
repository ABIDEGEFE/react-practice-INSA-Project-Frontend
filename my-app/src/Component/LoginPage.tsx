import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const { state, login } = useAuth();
  const Navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    login(email, password);
    // alert('Logged in successfully!');
    if ( state.user && state.user.role === 'admin'){
      Navigate('/admin')
    }
    if ( state.user && state.user.role == 'user') {
      Navigate('/user')
    }
  };

  return (
    <div>
      {/* {state.user && <p>your name is {state.user.name} and your role is {state.user.role}</p>} */}
      <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
        <textarea cols={20} rows={2} placeholder="enter your password"></textarea>
        <button onClick={handleLogin}>submit</button>
      </form>

      {state.user && <p>your name is {state.user.name} and your role is {state.user.role}</p>}
    </div>
  );
};

export default LoginPage;