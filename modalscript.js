var modal = document.getElementById("mymodal")
var btn = document.getElementById("btn1")
var closer = document.getElementById("close")


document.getElementById("btn1").onclick = function(event) {
	modal.setAttribute("style", "display: block")
}

window.onclick = function(event) {
	if(event.target != modal && event.target != btn) {
		modal.setAttribute("style", "display: none")
	}
}

closer.onmouseover = function(event) {
	closer.setAttribute("style", "cursor: hand")
}

closer.onclick = function(event) {
	modal.setAttribute("style", "display:none")
}

document.onkeydown = function(event) {
	if (event.keyCode == 27) {
		modal.setAttribute("style", "display:none")
	}
}