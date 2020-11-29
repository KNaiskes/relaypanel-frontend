const API_URL = 'http://localhost:8000/api/relays/';

let headers = {"Content-Type": "application/json"};
headers["Authorization"] = `Token c85e473c1cb01230fc4f11b7afc07e1388d195eb`;

export function GetRelayList() {
    return fetch(API_URL, {headers,})
	.then(data => data.json())
}
