function symbol(btnid) {

	if (btnid.id === 'circle') {
		let res = document.getElementById('res').value = 'circle'
		let circlebtn = document.getElementById("circle")
		circlebtn.style.backgroundColor = "rgb(49, 129, 102)"

		let crossbtn = document.getElementById("cross")
		crossbtn.style.backgroundColor = " aquamarine"
		return 'circle'
	}
	else if (btnid.id === 'cross') {
		let res = document.getElementById('res').value = 'cross'
		let crossbtn = document.getElementById("cross")
		crossbtn.style.backgroundColor = "rgb(49, 129, 102)"


		let circlebtn = document.getElementById("circle")
		circlebtn.style.backgroundColor = " aquamarine"

		return 'cross'
	}
}


function tictac(boxid) {
	let res = document.getElementById('res').value;
	if (res === 'circle' && boxid.innerText === "") {
		boxid.innerText = '⭕';
	}
	else if (res === 'cross' && boxid.innerText === "") {
		boxid.innerText = '\u274C';
	}
	

	let box1 = document.getElementById('box1').innerText
	let box2 = document.getElementById('box2').innerText
	let box3 = document.getElementById('box3').innerText
	let box4 = document.getElementById('box4').innerText
	let box5 = document.getElementById('box5').innerText
	let box6 = document.getElementById('box6').innerText
	let box7 = document.getElementById('box7').innerText
	let box8 = document.getElementById('box8').innerText
	let box9 = document.getElementById('box9').innerText
	let cross = '\u274C';
	let circle = '⭕';

	if (box1 === circle && box2 === circle && box3 === circle || box4 === circle && box5 === circle && box6 === circle || box7 === circle && box8 === circle && box9 === circle || box1 === circle && box4 === circle && box7 === circle || box2 === circle && box5 === circle && box8 === circle || box3 === circle && box6 === circle && box9 === circle || box1 === circle && box5 === circle && box9 === circle || box3 === circle && box5 === circle && box7 === circle) {

		let boxs = document.querySelectorAll(".row")
		for (let box of boxs) {
			box.innerHTML = ""
		}
		alert("circle win")

	}
	else if (box1 === cross && box2 === cross && box3 === cross || box4 === cross && box5 === cross && box6 === cross || box7 === cross && box8 === cross && box9 === cross || box1 === cross && box4 === cross && box7 === cross || box2 === cross && box5 === cross && box8 === cross || box3 === cross && box6 === cross && box9 === cross || box1 === cross && box5 === cross && box9 === cross || box3 === cross && box5 === cross && box7 === cross) {
		let boxs = document.querySelectorAll(".row")
		for (let box of boxs) {
			box.innerHTML = ""
		}
		alert("cross win")
		
	}
	if (box1 != "" && box2 != "" && box3 != "" && box4 != "" && box5 != "" && box6 != "" && box7 != "" && box8 != "" && box9 != "") {
	
		let boxs = document.querySelectorAll(".row")
		for (let box of boxs) {
			box.innerHTML = ""
		}
		alert("draw")
	}

}


// 			function sample(array) {
// 				return array[Math.floor(Math.random() * array.length)];
// 			}
// 			function pcmove(boxid){
// 				let res = document.getElementById('res').value;
// 			if (res === 'circle') {
// 				var pcSymbol  = '\u274C';
// 			}
// 			else if (res === 'cross') {
// 				var pcSymbol = '⭕';
// 			}
	
// 			let box1 = document.getElementById('box1')
// 			let box2 = document.getElementById('box2')
// 			let box3 = document.getElementById('box3')
// 			let box4 = document.getElementById('box4')
// 			let box5 = document.getElementById('box5')
// 			let box6 = document.getElementById('box6')
// 			let box7 = document.getElementById('box7')
// 			let box8 = document.getElementById('box8')
// 			let box9 = document.getElementById('box9')
// 			pcbox = sample([box1, box2, box3, box4, box5, box6, box7, box8, box9])
	
// 			if (pcbox.innerHTML === "") {
		
// 				pcbox.innerHTML = pcSymbol;
// 			}

// console.log (pcbox , pcSymbol)

// 			}








