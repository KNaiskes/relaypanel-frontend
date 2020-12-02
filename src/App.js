import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { RelayList } from './components/RelayList';
import { SingleRelay } from './components/SingleRelay';

import { Navbar } from './components/Navbar';

function App() {
    return (
	    <div className="App">
	    <Navbar />
	    <BrowserRouter>
	    <Switch>
	    <Route path='/' exact component={RelayList} />
	    <Route path='/relays/:id' exact component={SingleRelay} />
	    </Switch>
	    </BrowserRouter>
	    </div>
    );
}

export default App;
