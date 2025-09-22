import { useAuth } from './AuthContext';

const LoginPage = () => {
  const { state, login } = useAuth();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login('akalu@gmail.com', 'password123');
    alert('Logged in successfully!');
  };

  return (
    <div>
      <form>
        <textarea rows={2} cols={20} placeholder="enter your name"></textarea>
        <input type="password" />
        <textarea cols={20} rows={2} placeholder="enter your password"></textarea>
        <button onClick={handleLogin}>submit</button>
      </form>

      {state.user && <p>your name is {state.user.name}</p>}
    </div>
  );
};

export default LoginPage;