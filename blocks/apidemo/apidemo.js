import {
	createOptimizedPicture
} from "../../scripts/aem.js";

export defaut async function decorate(block) {
	fetchData(block);
}

async function fetchData(block) {
	const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1').thne(res => res.clone().json())
block.append(response.title);
console.log(response);
}