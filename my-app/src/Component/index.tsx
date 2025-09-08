import { useState } from 'react';

import { DashboardContext } from './context';
import Dashboard from './Dashboard';
// import { Sidebar } from './Components';
// import { Profile } from './Components';
import WelcomePage from './WelocomePage';

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DashboardContextValue {
  user : User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}
// interface DemoProps {}

export default function Demo() {
  const [user, setUser] = useState<User>({
    isSubscribed: false,
    name: 'Abinet',
  });

  const contextValue: DashboardContextValue = {user, setUser}



  return (
    <div>
      <DashboardContext.Provider value={contextValue}>

        <WelcomePage />
        <Dashboard />
        
      </DashboardContext.Provider>
    </div>
  );
}