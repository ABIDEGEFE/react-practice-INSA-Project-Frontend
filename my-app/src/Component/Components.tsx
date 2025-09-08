import { useUserContext } from './context';


interface SidebarProps {}


export function Sidebar({}: SidebarProps) {
  const {user, setUser} = useUserContext();

  const handleToggleSubscription = () => {
    setUser(prevUser => ({
      ...prevUser,
      isSubscribed: !prevUser.isSubscribed,
    }));
  };
  return (
   <div>
    <div>
      <button onClick={handleToggleSubscription}>
        {user.isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
      Sidebar means {user.isSubscribed ? 'subscribed' : 'not subscribed'}
    </div>
   </div>

  );
}

interface ProfileProps {}

export function Profile({}: ProfileProps) {
  const {user, setUser} = useUserContext();

    const handleChangeName = () => {
    setUser(prevUser => ({
      ...prevUser,
      name: prevUser.isSubscribed ? 'Abinet' : 'Agonafer',
    }));
  }

  return (
    <div>
      <div>
        <button onClick={handleChangeName}>
            Name : {user.name}
        </button>
      </div>

    </div>
  )
}