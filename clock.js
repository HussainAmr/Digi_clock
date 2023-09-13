let hour = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");
let ampm = document.getElementById("ampm");
let fulldate = document.getElementById("fulldate");
let day = document.getElementById("day");
let daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

setInterval(() => {
	let date = new Date();

	fulldate.innerHTML =
		(date.getDate() < 10 ? "0" + date.getDate() : "" + date.getDate()) +
		"/" +
		(date.getMonth() < 10 ? "0" + date.getMonth() : "" + date.getMonth()) +
		"/" +
		String(date.getFullYear()).slice(2);

	let dayNo = date.getDay();
	day.innerHTML = daysOfWeek[dayNo].slice(0, 3);

	let hours12 = date.getHours() % 12;
	ampm.innerHTML = date.getHours() >= 12 ? "PM" : "AM";

	hour.innerHTML = hours12;
	min.innerHTML = date.getMinutes();
	sec.innerHTML = date.getSeconds();

	sec.innerHTML <= 10 ? "0" + sec.innerHTML : "" + sec.innerHTML;

	hour.innerHTML =
		hour.innerHTML < 10 ? "0" + hour.innerHTML : hour.innerHTML;
	min.innerHTML = min.innerHTML < 10 ? "0" + min.innerHTML : min.innerHTML;
	sec.innerHTML = sec.innerHTML < 10 ? "0" + sec.innerHTML : sec.innerHTML;
}, 1000);
