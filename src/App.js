import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import SettingsPage from './components/SettingsPage/Settings';
import {Routes, Route} from 'react-router-dom';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Routes>
        <Route path='/profile' element={<Profile posts={props.posts}/>} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/dialogs/*' element={<Dialogs friends={props.friends} messages={props.messages}/>} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
