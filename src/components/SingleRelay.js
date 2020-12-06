import React, { useEffect, useState } from 'react';

import { GetSingleRelay } from './service/relay/relay';
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
    console.log(relay);
    console.log(typeof relay);
    return (
	<div className="SingleRelay">
	    <h1>{relay.name}</h1>
	    <h1>{relay.device}</h1>
	    <h1>{JSON.stringify(relay.status)}</h1>
	</div>
    );
}
