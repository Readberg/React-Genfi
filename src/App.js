import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      {/* <Profile /> */}
      <Dialogs />
    </div>
  );
}

export default App;
