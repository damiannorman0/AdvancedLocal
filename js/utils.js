function getTODO() {
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => {
			return response.json();
		});
}

function getSW() {
	return fetch('https://swapi.co/api/people/')
		.then(response => {
			return response.json();
		});
}
