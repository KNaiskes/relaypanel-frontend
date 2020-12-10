import React, { useEffect, useState } from 'react';

import { GetSingleRelay } from './service/relay/relay';
import { useParams } from 'react-router-dom';

import { UpdateRelayState } from './UpdateState';

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
			    <UpdateRelayState {...relay} />
			</td>
		    </tr>
		</tbody>
	    </table>
	</div>
    );
}
