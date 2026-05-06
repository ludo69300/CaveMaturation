function fct_type_affinage() {
	var commande_XHR = new XMLHttpRequest();
	commande_XHR.open("GET","/?current="+document.getElementById("typeaffinage").value,true);
	commande_XHR.send()
};
function fct_temp_mini() {
	var commande_XHR = new XMLHttpRequest();
	commande_XHR.open("GET","/?temp_mini="+document.getElementById("temp_mini").value,true);
	commande_XHR.send()
};
function fct_temp_median() {
	var commande_XHR = new XMLHttpRequest();
	commande_XHR.open("GET","/?temp_median="+document.getElementById("temp_median").value,true);
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
function fct_humid_median() {
	var commande_XHR = new XMLHttpRequest();
	commande_XHR.open("GET","/?humid_median="+document.getElementById("humid_median").value,true);
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
document.getElementById("typeaffinage").selectedIndex = '{{current}}';
