//your JS code here. If required.
let output = document.getElementById('output');

function getData(){
	return new Promise((res,rej) => {
		setTimeout(()=>{
			res('Hello, world!');
		}, 1000);
	})
}

getData().then((data) => {
	output.textContent = data;
})