function fct_temp_mini() {
	var commande_XHR = new XMLHttpRequest();
	commande_XHR.open("GET","/?temp_mini="+document.getElementById("temp_mini").value,true);
	commande_XHR.send()
};
function fct_temp_max() {
	var commande_XHR = new XMLHttpRequest();
	commande_XHR.open("GET","/?temp_max="+document.getElementById("temp_max").value,true);
	commande_XHR.send()
};
function fct_humid_mini() {
	var commande_XHR = new XMLHttpRequest();
	commande_XHR.open("GET","/?humid_mini="+document.getElementById("humid_mini").value,true);
	commande_XHR.send()
};
function fct_humid_max() {
	var commande_XHR = new XMLHttpRequest();
	commande_XHR.open("GET","/?humid_max="+document.getElementById("humid_max").value,true);
	commande_XHR.send()
};
function fct_ventilation() {
	var commande_XHR = new XMLHttpRequest();
	commande_XHR.open("GET","/?ventilation=OnOff",true);
	commande_XHR.send()
};

