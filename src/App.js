import Body from './pages/body';
import SideNav from './components/SideNav';
import { UserProvider } from './utils/UserProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <SideNav />
        <Body />
      </UserProvider>
    </div>
  );
}

export default App;
