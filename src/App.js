import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { RelayList } from './components/RelayList';
import { SingleRelay } from './components/SingleRelay';

import { Navbar } from './components/Navbar';
import { UpdateForm } from './components/UpdateForm';

function App() {
    return (
	    <div className="App">
	    <Navbar />
	    <BrowserRouter>
	    <Switch>
	    <Route path='/' exact component={RelayList} />
	    <Route path='/relays/:id' exact component={SingleRelay} />
	    <Route path='/relays/:id/update' exact component={UpdateForm} />
	    </Switch>
	    </BrowserRouter>
	    </div>
    );
}

export default App;
