import React, { useEffect, useState } from 'react';

import { GetRelayList } from './service/relay/relay';
import { UpdateRelayState } from './UpdateState';

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
	    <table>
		<tbody>
		    <tr>
			<th>Name</th>
			<th>Status</th>
		    </tr>
		    {list.map(item => <tr key={item.name}><td>
					  <a href={`relays/${item.id}`}>{item.name}</a></td>
					  <td><UpdateRelayState {...item} /></td>
				      </tr>
			     )}
		</tbody>
	    </table>
	</div>
    );
}
