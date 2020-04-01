let queryForm = document.getElementsByClassName("queryForm");
let input = document.getElementsByClassName("input");
let form = document.getElementById("form");
let selectEl = 0;
let i = 0;

function onSubmit(event) {
	event.preventDefault();
	selectEl = event.explicitOriginalTarget.value;
	if (selectEl <= 8) {
		queryForm[1].classList.remove("height");
		queryForm[0].classList.add("height");
	} else if (selectEl >= 9) {
		queryForm[0].classList.remove("height");
		queryForm[1].classList.add("height");
	}
	const ar = [];
	for (let key in input) {
		ar.push(input[key]);
	}
	// console.log(input);
	const index = [parseInt(selectEl) - 1];

	const spliced = ar.splice(index, 1);
	// spliced.classList.add("scale");
	spliced[0].classList.add("scale");
	for (let key in ar) {
		input[key].disabled = true;
		ar[key].classList.add("gray");
		// console.log(ar[key].classList);
	}
	input = ar;
}

form.addEventListener("submit", (e) => onSubmit(e));

if (i < 1)
	for (let key in input)
		input[key].addEventListener("click", (event) => {
			i++;
			event.preventDefault();
			selectEl = event.target.value;
			if (selectEl <= 8) {
				queryForm[1].classList.remove("height");
				queryForm[0].classList.add("height");
			} else if (selectEl >= 9) {
				queryForm[0].classList.remove("height");
				queryForm[1].classList.add("height");
			}
			const ar = [];
			for (let key in input) {
				ar.push(input[key]);
			}
			console.log(input);
			const index = [parseInt(selectEl) - 1];

			const spliced = ar.splice(index, 1);
			// spliced.classList.add("scale");
			spliced[0].classList.add("scale");
			for (let key in ar) {
				input[key].disabled = true;
				ar[key].classList.add("gray");
			}
		});
