import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Feed from './components/Feed/Feed';
import Music from './components/Music/Music';
import SettingsPage from './components/SettingsPage/Settings';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Routes>
        <Route path='*'element={<Profile />} />
        <Route path='/feed'element={<Feed />} />
        <Route path='/dialogs'element={<Dialogs />} />
        <Route path='/music'element={<Music />} />
        <Route path='/settings'element={<SettingsPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
