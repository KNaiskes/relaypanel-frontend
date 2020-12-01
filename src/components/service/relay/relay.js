const BASE_URL = 'http://localhost:8000/api/relays/';

let headers = {"Content-Type": "application/json"};
headers["Authorization"] = `Token c85e473c1cb01230fc4f11b7afc07e1388d195eb`;

export function GetRelayList() {
    return fetch(BASE_URL, {headers,})
	.then(data => data.json())
}

export function GetSingleRelay(id) {
    const url = `${BASE_URL}${id}`;
    return fetch(url, {headers,})
	.then(data => data.json())
    console.log(url)
}
