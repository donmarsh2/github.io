const $inputDatas = [
  document.getElementById("a1"),
  document.getElementById("a2"),
  document.getElementById("a3"),
  document.getElementById("b1"),
  document.getElementById("b2"),
  document.getElementById("b3"),
  document.getElementById("c1"),
  document.getElementById("c2"),
  document.getElementById("c3"),
]
const $outputDatas = [
  document.getElementById("A1"),
  document.getElementById("A2"),
  document.getElementById("A3"),
  document.getElementById("B1"),
  document.getElementById("B2"),
  document.getElementById("B3"),
  document.getElementById("C1"),
  document.getElementById("C2"),
  document.getElementById("C3"),
]
function button() {
    $outputDatas[0].innerHTML = $inputDatas[0].value + 
    '<canvas id="circlea1" width="200px" height="200px"></canvas>';
	$outputDatas[1].innerHTML = $inputDatas[1].value + 
	'<canvas id="circlea2" width="200px" height="200px"></canvas>';
	$outputDatas[2].innerHTML = $inputDatas[2].value + 
	'<canvas id="circlea3" width="200px" height="200px"></canvas>';
	$outputDatas[3].innerHTML = $inputDatas[3].value + 
	'<canvas id="circleb1" width="200px" height="200px"></canvas>';
	$outputDatas[4].innerHTML = $inputDatas[4].value + 
	'<canvas id="circleb2" width="200px" height="200px"></canvas>'; 
	$outputDatas[5].innerHTML = $inputDatas[5].value + 
	'<canvas id="circleb3" width="200px" height="200px"></canvas>'; 
	$outputDatas[6].innerHTML = $inputDatas[6].value + 
	'<canvas id="circlec1" width="200px" height="200px"></canvas>'; 
	$outputDatas[7].innerHTML = $inputDatas[7].value + 
	'<canvas id="circlec2" width="200px" height="200px"></canvas>'; 
	$outputDatas[8].innerHTML = $inputDatas[8].value + 
	'<canvas id="circlec3" width="200px" height="200px"></canvas>'; 
    makeCircle();
}
const makeCircle = () => {
	let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	let canvasIndex = 0;
	let canvasLength = $canvases.length;
	while (canvasIndex < canvasLength){
	$canvases[canvasIndex].style.visibility ="hidden";
	let canvas1 = $canvases[canvasIndex];
	let c = canvas1.getContext('2d');

	c.strokeStyle = 'red';  // 線の色
	// パスの開始
	c.beginPath();
	c.arc( 100, 100, 70, 0 * Math.PI / 180, 360 * Math.PI / 180, false )
	// 描画
	c.lineWidth =5;
	c.stroke();
	canvasIndex++;
	}
	
} 
const visibleHidden = (arg) => {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	if($canvases[arg].style.visibility=="hidden"){
		$canvases[arg].style.visibility ="visible";
		// visibleで表示
	}
	else{
	$canvases[arg].style.visibility ="hidden";
		// hiddenで非表示
	}
}

function visiblea1() {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	visibleHidden(0)
		if($canvases[0].style.visibility=="visible" &&
			$canvases[1].style.visibility=="visible" &&
			$canvases[2].style.visibility=="visible"){
			 window.alert('ビンゴ！')
			}
		else if($canvases[0].style.visibility=="visible" &&
	       $canvases[3].style.visibility=="visible" &&
	       $canvases[6].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else if($canvases[0].style.visibility=="visible" &&
	       $canvases[4].style.visibility=="visible" &&
	       $canvases[8].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else{

		}
}
function visiblea2() {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	visibleHidden(1)
		if($canvases[0].style.visibility=="visible" &&
			$canvases[1].style.visibility=="visible" &&
			$canvases[2].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else if($canvases[1].style.visibility=="visible" &&
	       $canvases[4].style.visibility=="visible" &&
	       $canvases[7].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else{

		}
}
function visiblea3() {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	visibleHidden(2)
		if($canvases[0].style.visibility=="visible" &&
			$canvases[1].style.visibility=="visible" &&
			$canvases[2].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else if($canvases[2].style.visibility=="visible" &&
	       $canvases[5].style.visibility=="visible" &&
	       $canvases[8].style.visibility=="visible"){
			window.alert('2杯！')
			}
		else{

		}
}
function visibleb1() {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	visibleHidden(3)
		if($canvases[0].style.visibility=="visible" &&
			$canvases[3].style.visibility=="visible" &&
			$canvases[6].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else if($canvases[3].style.visibility=="visible" &&
	       $canvases[4].style.visibility=="visible" &&
	       $canvases[5].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else{

		}
}
function visibleb2() {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	visibleHidden(4)
		if($canvases[1].style.visibility=="visible" &&
			$canvases[4].style.visibility=="visible" &&
			$canvases[7].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else if($canvases[3].style.visibility=="visible" &&
	       $canvases[4].style.visibility=="visible" &&
	       $canvases[5].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else if($canvases[0].style.visibility=="visible" &&
	       $canvases[4].style.visibility=="visible" &&
	       $canvases[8].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else if($canvases[2].style.visibility=="visible" &&
	       $canvases[4].style.visibility=="visible" &&
	       $canvases[6].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else{

		}
}
function visibleb3() {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	visibleHidden(5)
		if($canvases[2].style.visibility=="visible" &&
			$canvases[5].style.visibility=="visible" &&
			$canvases[8].style.visibility=="visible"){
			window.alert('2杯！')
		}
		else if($canvases[3].style.visibility=="visible" &&
	       $canvases[4].style.visibility=="visible" &&
	       $canvases[5].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else{

		}
}
function visiblec1() {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	visibleHidden(6)
		if($canvases[0].style.visibility=="visible" &&
			$canvases[3].style.visibility=="visible" &&
			$canvases[6].style.visibility=="visible"){
			window.alert('ビンゴ！')
		}
		else if($canvases[6].style.visibility=="visible" &&
	       $canvases[7].style.visibility=="visible" &&
	       $canvases[8].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else if($canvases[2].style.visibility=="visible" &&
	       $canvases[4].style.visibility=="visible" &&
	       $canvases[6].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else{

		}
}
function visiblec2() {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]	
	visibleHidden(7)
		if($canvases[1].style.visibility=="visible" &&
			$canvases[4].style.visibility=="visible" &&
			$canvases[7].style.visibility=="visible"){
			window.alert('ビンゴ！')
		}
		else if($canvases[6].style.visibility=="visible" &&
	       $canvases[7].style.visibility=="visible" &&
	       $canvases[8].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else{

		}
}
function visiblec3() {
		let $canvases = [
  document.getElementById("circlea1"),
  document.getElementById("circlea2"),
  document.getElementById("circlea3"),
  document.getElementById("circleb1"),
  document.getElementById("circleb2"),
  document.getElementById("circleb3"),
  document.getElementById("circlec1"),
  document.getElementById("circlec2"),
  document.getElementById("circlec3"),
]
	visibleHidden(8)
		if($canvases[2].style.visibility=="visible" &&
			$canvases[5].style.visibility=="visible" &&
			$canvases[8].style.visibility=="visible"){
			window.alert('2杯！')
		}
		else if($canvases[6].style.visibility=="visible" &&
	       $canvases[7].style.visibility=="visible" &&
	       $canvases[8].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else if($canvases[0].style.visibility=="visible" &&
	       $canvases[4].style.visibility=="visible" &&
	       $canvases[8].style.visibility=="visible"){
			window.alert('ビンゴ！')
			}
		else{

		}
}
