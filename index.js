

function init() {
	let helloWorld = document.createElement("div");

	helloWorld.innerHTML = "Hello, World!";
	
	document.querySelector("content").appendChild(helloWorld);

}
init();
