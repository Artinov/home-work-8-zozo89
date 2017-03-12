function setText(selector, text) {
	var element = document.querySelector(selector);
		element.innerHTML = text;
}

function setTextAll(selector, text) {
	var elements = document.querySelectorAll(selector);
		elements.forEach(function(s){
			s.innerHTML = text;
		});
}

setText("p", "wasn't that hard, yeah ?");
setTextAll("div .block a", "or was it ?");