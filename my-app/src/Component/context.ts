import { createContext, useContext } from 'react';

import { User } from './index';

interface DashboardContextValue {
  user : User;
  setUser : React.Dispatch<React.SetStateAction<User>>;
}

export const DashboardContext = createContext<DashboardContextValue | undefined>(undefined);

export function useUserContext() {
  const context = useContext(DashboardContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used with a DashboardContext');
  }

  return context;
}