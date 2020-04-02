let queryForm = document.getElementsByClassName("queryForm");
let input = document.getElementsByClassName("input");
let form = document.getElementById("form");
let selectEl = 0;
const thankyou = document.querySelector(".thankyou");
let textarea = document.getElementById("textarea");
let submit = document.querySelectorAll(".submit");

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
	thankyou.classList.remove("display");
	queryForm[0].classList.remove("height");
	queryForm[1].classList.remove("height");
	submit.forEach((item) => {
		item.disabled = false;
	});
	for (let key in input) {
		textarea.disabled = false;
		textarea.value = "";
		input[key].disabled = false;
	}
	for (let inde in input) {
		input[inde].style.removeProperty("transform");
		input[inde].classList.remove("gray");
	}
});

submit.forEach((item) => {
	item.addEventListener("click", (event) => {
		if (!item.lastElementChild) {
			event.preventDefault();
			item.disabled = true;
			thankyou.classList.add("display");
			for (let key in input) {
				input[key].disabled = true;
			}
			textarea.disabled = true;
			console.log(selectEl, ": on line 38");
			console.log(textarea.value, ": on line 39");
		}
		if (item.lastElementChild) {
			item.disabled = true;
			thankyou.classList.add("display");
			reset.style.display = "none";
			for (let key in input) {
				input[key].disabled = true;
			}
			console.log(selectEl, ": on line 38");
			console.log(textarea.value, ": on line 39");
			item.lastElementChild.href.click();
		}
	});
});

for (let key in input)
	input[key].addEventListener("click", (event) => {
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

		const spliced = ar.splice(index, 1);
		spliced[0].style.transform = "scale(1.2)";
		spliced[0].classList.remove("gray");
		for (let inde in ar) {
			ar[inde].style.transform = "scale(1)";
			ar[inde].style.removeProperty("transform");
			ar[inde].classList.add("gray");
		}
	});
