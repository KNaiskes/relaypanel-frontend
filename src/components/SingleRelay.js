import React, { useEffect, useState } from 'react';

import { GetSingleRelay } from './service/relay/relay';

export function SingleRelay() {
    const [relay, setRelay] = useState([]);
    useEffect(() => {
	let mounted = true;
	GetSingleRelay(1)
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
	</div>
    );
}
