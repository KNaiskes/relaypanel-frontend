import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

import { GetSingleRelay, UpdateRelay } from './service/relay/relay';

export function UpdateForm() {
    const { id } = useParams();

    const [relay, setRelay] = useState([]);
    useEffect(() => {
	let mounted = true;
	GetSingleRelay(id)
	    .then(data => {
		if(mounted) {
		    setRelay(data)
		}
	    })
	return () => mounted = false;
    }, [id])


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
	console.log(data);
	relay.name = data.updateName;
	relay.device = data.updateDevice;
	//console.log("Relay: ", relay);
	UpdateRelay(id, relay)
    };

    return (
	<form onSubmit={handleSubmit(onSubmit)}>
	    <label>Update Name</label>
	    <input
		name="updateName"
		ref={register({ required: true, maxLength: 10})}
	    />
	    <label>Update device type</label>
	    <input
		name="updateDevice"
		ref={register({ required: true, maxLength: 10 })}
	    />
	    {errors.exampleRequired && <p>This field is required</p>}
	    <input type="submit" />
	</form>
    );
}
