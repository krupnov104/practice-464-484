let table = document.querySelector('#table');
let tr = document.querySelector('#tr');
let td = document.querySelector('#td');
let button = document.querySelector('#button')

button.addEventListener('click', ()=> {
	for (let i = 0; i < +tr.value; i++) {
		let trr = document.createElement('tr');
		
		for (let i = 0; i < +td.value; i++) {
			let tdd = document.createElement('td');
			tdd.textContent = 'x';
			trr.appendChild(tdd);
		}
		
		table.appendChild(trr);
	}
})

