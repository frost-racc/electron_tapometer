var click_no = 0;
var ar = new Array()
ar.fill(0)

click1 = 0;


function clicked() {
	click_no++
	ar.push(Date.now())
	click2 = Date.now()

	delay = Math.floor(60000 / (click2 - click1))

	text = document.getElementById("tempometer")
	text.innerHTML = "Tempo: " + delay  +" [bpm]";

	click1 = click2
}


