let elem = document.querySelector('#elem');

let arr = [1, 2, 3, 4, 5];

for (let elem1 of arr) {
	let li = document.createElement('li');
	li.textContent = elem1;
	elem.appendChild(li);
}

