function fcntypeSalaison() {
	var elts = document.getElementsByTagName('fieldset'),i;
	for (var i = 0; i < elts.length; i++) {
		if (i==document.getElementById("typesalaison").value){
			elts[i].style.display = 'inline-block';
		}else{
			elts[i].style.display = 'none';
		};
	  };
};
function claculSalaison() {
	//console.log("Hellos");
	let inputsalaisonSelect = document.getElementById("salaisonSelect");
	let inputsalaisonPoids = document.getElementById("salaisonPoids");

	let indexsalaisonSelect = parseFloat(inputsalaisonSelect.value);
	let indexsalaisonPoids = parseInt(inputsalaisonPoids.value);

	inputsalaisonSelect.addEventListener("change", () => {
		indexsalaisonSelect = parseFloat(inputsalaisonSelect.value);
		calculssalaisonVide()
	});
	inputsalaisonPoids.addEventListener("change", () => {
		indexsalaisonPoids = parseInt(inputsalaisonPoids.value);
		calculssalaisonVide()
	});
	function calculssalaisonVide() {
		document.getElementById("salaisonSel").value=indexsalaisonSelect*indexsalaisonPoids+' gr';
		document.getElementById("salaisonSucre").value=indexsalaisonSelect*indexsalaisonPoids/2+' gr';
		document.getElementById("salaisonPoivre").value=indexsalaisonPoids*0.001+' gr';
		document.getElementById("salaisonBaie").value=indexsalaisonPoids*0.001+' gr';
		document.getElementById("salaisonEpices").value=indexsalaisonPoids*0.0005+' gr';
		document.getElementById("salaisonLaurier").value=indexsalaisonPoids/500+' Feuilles';
	};
	let inputhaut = document.getElementById("salaisonHauteur");
	let indexhaut = parseInt(inputhaut.value);
	inputhaut.addEventListener("change", () => {
		indexhaut = parseInt(inputhaut.value);
		document.getElementById("salaisonJour").value=indexhaut/2+1+' j';
	});
	let inputsaumureeau = document.getElementById("saumureeau");
	let indexsaumureeau = parseInt(inputsaumureeau.value);
	inputsaumureeau.addEventListener("change", () => {
		indexsaumureeau = parseInt(inputsaumureeau.value);
		document.getElementById("saumureSel").value=indexsaumureeau*60+' gr';
		document.getElementById("saumureSucre").value=indexsaumureeau*30+' gr';
		document.getElementById("saumurePoivre").value=indexsaumureeau*5+' gr';
		document.getElementById("saumureBaie").value=indexsaumureeau*10+' gr';
		document.getElementById("saumureSauge").value=indexsaumureeau*2+' gr';
		document.getElementById("saumureThym").value=indexsaumureeau+' branche(s)';
		document.getElementById("saumureClou").value=indexsaumureeau+' clou(s)';
		document.getElementById("saumureLaurier").value=indexsaumureeau*2+' Feuilles';
	});
	let inputcotePoids = document.getElementById("cotePoids");
	let indexcotePoids = parseInt(inputcotePoids.value);
	inputcotePoids.addEventListener("change", () => {
		indexcotePoids = parseInt(inputcotePoids.value);
		document.getElementById("coteSel").value=indexcotePoids*0.045+' gr';
	});
	let inputfoiePoids = document.getElementById("foiePoids");
	let indexfoiePoids = parseInt(inputfoiePoids.value);
	inputfoiePoids.addEventListener("change", () => {
		indexfoiePoids = parseInt(inputfoiePoids.value);
		document.getElementById("foieSel").value=indexfoiePoids*0.012+' gr';
		document.getElementById("foieSucre").value=indexfoiePoids*0.006+' gr';
		document.getElementById("foiePoivre").value=indexfoiePoids*0.002+' gr';
		document.getElementById("foieEpices").value=indexfoiePoids*0.001+' gr';
		document.getElementById("foieLiquoreux").value=indexfoiePoids*30+' gr';
	});
	let inputsaumonPoids = document.getElementById("saumonPoids");
	let indexsaumonPoids = parseInt(inputsaumonPoids.value);
	inputsaumonPoids.addEventListener("change", () => {
		indexsaumonPoids = parseInt(inputsaumonPoids.value);
		document.getElementById("saumonSel").value=Math.round(indexsaumonPoids*34/10)/100+' gr';
		document.getElementById("saumonSucre").value=Math.round(indexsaumonPoids*17/10)/100+' gr';
		document.getElementById("saumonBaie").value=Math.round(indexsaumonPoids/10)/100+' gr';
	});
	let inputpizza = document.getElementById("pizzaPoids");
	let indexpizza = parseInt(inputpizza.value);
	inputpizza.addEventListener("change", () => {
		indexpizza = parseInt(inputpizza.value);
		document.getElementById("pizzaFarine").value=Math.round(indexpizza*614/10)/100+' gr';
		document.getElementById("pizzaEau").value=Math.round(indexpizza*368/10)/100+' gr';
		document.getElementById("pizzaSel").value=Math.round(indexpizza*18/10)/100+' gr';
		document.getElementById("pizzaLevure").value=Math.round(indexpizza*198/1000)/100+' gr';
	});
	let inputbuns = document.getElementById("bunsNb");
	let indexbuns = parseInt(inputbuns.value);
	inputbuns.addEventListener("change", () => {
		indexbuns = parseInt(inputbuns.value);
		let poids=indexbuns*100;
		document.getElementById("bunsPoids").value=poids+' gr';
		let farine=Math.round(indexbuns*52356/10)/100;
		document.getElementById("bunsFarine").value=farine+' gr';
		let huile=Math.round(indexbuns*1047/10)/100;
		document.getElementById("bunsHuile").value=huile+' gr';
		document.getElementById("bunsSel").value=huile+' gr';
		document.getElementById("bunsLevure").value=huile+' gr';
		let eau=Math.round(indexbuns*13089/10)/100;
		document.getElementById("bunsEau").value=eau+' gr';
		document.getElementById("bunsLait").value=eau+' gr';
		let sucre=Math.round(indexbuns*2618/10)/100;
		document.getElementById("bunsSucre").value=sucre+' gr';
		let beurre=Math.round(indexbuns*5236/10)/100;
		document.getElementById("bunsBeurre").value=beurre+' gr';
		let puree=Math.round((poids-farine-3*huile-2*eau-sucre-beurre)*100)/100
		document.getElementById("bunsPuree").value=puree+' gr';
	});
};
claculSalaison();