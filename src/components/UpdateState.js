import { UpdateRelay } from './service/relay/relay';

export function UpdateRelayState(relay) {
    const data = {
	'name': relay.name, 'device': relay.device,'status': !relay.status
    };

    return (
	<div className="updStatus">
	    <label className="switch">
		<input type="checkbox"
		       onChange={ () => {
			   UpdateRelay(relay.id, data)
			   setTimeout(window.location.reload.bind(window.location), 250);
		       }
		       }
		       checked={relay.status || false}/>
		<span className="slider round"></span>
	    </label>
	</div>
    );
}
