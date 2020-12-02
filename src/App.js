import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'

import { RelayList } from './components/RelayList';
import { SingleRelay } from './components/SingleRelay';

function App() {
    return (
	    <div className="App">
	    <BrowserRouter>
	    <Route path='/relays/:id' exact component={SingleRelay} />
	    </BrowserRouter>
	    </div>
    );
}

export default App;
