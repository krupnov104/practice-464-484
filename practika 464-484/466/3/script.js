let table = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
		td.textContent = 'x';
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}
