import './App.css';
import React, { useEffect, useState } from 'react';

import { GetRelayList } from './components/service/relay/relay';

function App() {
    const [list, setList] = useState([]);
    useEffect(() => {
   let mounted = true;
   GetRelayList()
     .then(items => {
       if(mounted) {
         setList(items)
       }
     })
   return () => mounted = false;
    }, [])
    console.log(list);
    return (
	<div className="App">
	    <ul>
		{list.map(item => <li key={item.name}>{item.name}</li>)}
	    </ul>
	</div>
    );
}

export default App;
