//java script for dard analog watch
setInterval(() => {
	//get time into hour min and sec formate
	let d = new Date();
	let htime = d.getHours();
	let mtime = d.getMinutes();
	let stime = d.getSeconds();
	//========================end=================
	//get rotation  value of all three hour min sec part 
	let hourRotation = ((30 * htime) + (mtime / 2));
	let minRotation = 6 * mtime;
	let secRotation = 6 * stime;
	//========================end=================
	hour.style.transform = `rotate(${hourRotation}deg)`;
	min.style.transform = `rotate(${minRotation}deg)`;
	sec.style.transform = `rotate(${secRotation}deg)`;
}, 1000);
//start dark and light mode 
function toggleClass() {
	const body = document.querySelector("body");
	body.classList.toggle("light");
}