var click_no = 0;
var ar = new Array()
ar.fill(0)

function clicked() {
	click_no++
	click = Date.now()	

	delay1 = last_two_beats()

	text = document.getElementById("tempometer")
	text.innerHTML = "Tempo: " + delay1  +" [bpm]";
}

function last_two_beats() {
	delay = (ar[ar.length-1] - ar[ar.length-2])
	if(delay > 1000) ar.fill(0)
	bpm = 60000 / delay
	console.log(delay, ar, ar.length, ar[ar.length-1], ar[ar.length-2])
	return bpm

}
