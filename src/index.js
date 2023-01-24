import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';

let posts = [
  {id: 1, name: 'Taisha', time: '5 minutes', message: 'A great day when you are confident in yourself!', likeCount: '17'},
  {id: 2, name: 'Andrew', time: '1 hour', message: 'Hi, how are you?', likeCount: '92'},
];

let friends = [
  { id: 1, name: "Roman" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Victor" },
  { id: 4, name: "Igor" },
  { id: 5, name: "Ivan" },
  { id: 6, name: "Diana" },
];

let messages = [
  { id: 1, message: "hi" },
  { id: 2, message: "Fine" },
  { id: 3, message: "How are you?" },
  { id: 4, message: "Where are you from?" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} friends={friends} messages={messages}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
