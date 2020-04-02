let queryForm = document.getElementsByClassName("queryForm");
let input = document.getElementsByClassName("input");
let form = document.getElementById("form");
let selectEl = 0;
let i = 0;
let reset = document.getElementById("reset");

// function resetFunc() {}

// document.getElementById("reset").addEventListener("click", resetFunc);
// // reset.addEventListener("click", resetFunc());

// function onSubmit(event) {
// 	event.preventDefault();
// 	selectEl = event.explicitOriginalTarget.value;
// 	if (selectEl <= 8) {
// 		queryForm[1].classList.remove("height");
// 		queryForm[0].classList.add("height");
// 		queryForm[1].style.display = "none";
// 	} else if (selectEl >= 9) {
// 		queryForm[0].classList.remove("height");
// 		queryForm[1].classList.add("height");
// 	}
// 	reset.style.display = "block";
// 	const ar = [];
// 	for (let key in input) {
// 		ar.push(input[key]);
// 	}
// 	// console.log(input);
// 	const index = [parseInt(selectEl) - 1];

// 	const spliced = ar.splice(index, 1);
// 	// spliced.classList.add("scale");
// 	spliced[0].classList.add("scale");
// 	for (let key in ar) {
// 		input[key].disabled = true;
// 		ar[key].classList.add("gray");
// 		// console.log(ar[key].classList);
// 	}
// 	input = ar;
// }

// form.addEventListener("submit", (e) => onSubmit(e));

// if (i < 1)
for (let key in input)
	input[key].addEventListener("click", (event) => {
		// reset.style.display = "block";
		i++;
		event.preventDefault();
		selectEl = event.target.value;
		const index = [parseInt(selectEl) - 1];

		if (selectEl <= 8) {
			queryForm[0].classList.add("height");
			queryForm[1].classList.remove("height");
			queryForm[1].style.display = "none";
		} else if (selectEl >= 9) {
			queryForm[1].style.display = "block";
			queryForm[0].classList.remove("height");
			queryForm[1].classList.add("height");
		}

		const ar = [];
		for (let key in input) {
			ar.push(input[key]);
		}
		for (let key in ar) {
			// ar[key].classList.remove("scale");
			// console.log(ar[key].classList);
		}
		// console.log(input);

		const spliced = ar.splice(index, 1);
		spliced[0].classList.add("scale");
		spliced[0].classList.remove("gray");
		for (let key in ar) {
			ar[key].classList.remove("scale");
			ar[key].classList.add("gray");
		}
	});
