import React from 'react';
import ReactDOM from 'react-dom';
import Books from './components/Books/Books.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
    <>
    <Books />
    </>
  );

ReactDOM.render(<App />, document.getElementById('root'));