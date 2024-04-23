
 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import mystore from './store/store.js'; //you can use any name 
import {Provider} from 'react-redux';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render( <Provider store={mystore}><App/></Provider> );
