var ar = new Array()
const win_size = 4

click1 = 0


function clicked() {
	
	if(ar.length >= win_size){
		ar.shift()
	}
	

	click2 = Date.now()
	delay = (click2 - click1)

	ar.push(delay)


	bpm = Math.floor(60000 / delay)
	


	click1 = click2

	bpma=Math.floor(bpm_avg_f())

	text_lasttwo = document.getElementById("tempometer-lasttwo")
	text_lasttwo.innerHTML = "Tempo: " + bpm  +" [bpm][last two]";
	text_avg= document.getElementById("tempometer-avg")
	text_avg.innerHTML = "Tempo: " + bpma  +" [bpm][avg]";
}

function bpm_avg_f(){
	tmp = 0
	if(ar.length ==win_size){
		for(let i = 0; i <= ar.length-1; i++){
			tmp = tmp + ar[i]
		}
	}
	bpma = 60000/(tmp/win_size)
	return bpma
}
