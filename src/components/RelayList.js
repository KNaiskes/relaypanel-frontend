import React, { useEffect, useState } from 'react';

import { GetRelayList } from './service/relay/relay';

export function RelayList() {
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

    return (
	<div className="App">
	    <ul>
		{list.map(item => <li key={item.name}>
		    <a href={`relays/${item.id}`}>{item.name}</a></li>)}
	    </ul>
	</div>
    );
}
