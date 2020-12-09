import React, { useEffect, useState } from 'react';

import { GetSingleRelay, UpdateState } from './service/relay/relay';
import { useParams } from 'react-router-dom';

export function SingleRelay() {
    const [relay, setRelay] = useState([]);
    const { id } = useParams();
    useEffect(() => {
	let mounted = true;
	GetSingleRelay(id)
	    .then(data => {
		if(mounted) {
		    setRelay(data)
		}
	    })
	return () => mounted = false;
    }, [])

    function updateState() {
	const data = {
	    'name': relay.name, 'device': relay.device,'status': !relay.status
	};
	UpdateState(id, data);
	window.location.reload(false);
}

    return (
	<div className="SingleRelay">
	    <table>
		<tbody>
		    <tr>
			<th>Name</th>
			<th>Device</th>
			<th>Status</th>
		    </tr>
		    <tr>
			<td>{relay.name}</td>
			<td>{relay.device}</td>
			<td>
			    <label class="switch">
				<input type="checkbox"
				       onChange={updateState} checked={relay.status || false}/>
				<span class="slider round"></span>
			    </label>
			</td>
		    </tr>
		</tbody>
	    </table>
	</div>
    );
}
