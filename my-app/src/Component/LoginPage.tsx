import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { error } from 'console';



const LoginPage = () => {
  const { state, login } = useAuth();
  const Navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  // useEffect will run only after react renders update.
  useEffect(() =>{
    if (state.user?.role === "admin"){
      Navigate('/admin')
    }
    if (state.user?.role === 'user'){
      Navigate('/user')
    }
  }, [state.user])

  const HandleLogin = (e:React.FormEvent) => {
    e.preventDefault();

    login(formData.email, formData.password);


    
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    }
    )
  }

  return (
    <div>
       <form onSubmit={HandleLogin}>
        <div>
          <label>enter email</label>
        </div>
        <input
        type="email"
        name = "email"
        required
        value={formData.email}
        onChange={handleInputChange}
        placeholder='enter your email'
         />
         <div>
            <label>enter password</label>
         </div>
         <input
         type='password'
         name='password'
         required
         value={formData.password}
         onChange={handleInputChange}
         placeholder='enter your password'
          />

        <button>
          sign in
        </button>
       </form>
    </div>
  );
};

export default LoginPage;