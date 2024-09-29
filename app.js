//massive/arrey -> [number,sting,boolean,null]olon utga zereg hadgalna
var toonuud=[5,6,78,4,3,9,];
console.log(toonuud);
//index ->elementiin bairshil. 0-ees ehelne
console.log(toonuud[0]);//massiviin hamgiin ehnii utga
console.log(toonuud[toonuud.length-1]);//hamgiin suuliin utga
//for
for(var i=0; i<=toonuud.length-1;i++){
	console.log(toonuud[i]);
}
var toonuud1=[2,4,6,8,10,12];
console.log(toonuud1[0]);
console.log(toonuud1[toonuud1.length-1]);
console.log(toonuud1[0]*toonuud1[toonuud1.length-1])
var toonuud2=[2,3,4,5,6,7];
for(var i=0; i<=toonuud.length-1;i++){
	if(i%2==0){
		console.log('tegsh'+i);
	}
	else{
		console.log('sondgoi'+i)
	}
}
var toonuud3=[2,3,4,5,6,7,10,12,13,15,13,];
console.log(toonuud3);
var niilber=0;
var urjver =1;
for(var i=0; i<=toonuud3.length-1; i++){
	niilber=niilber+toonuud3[i];
	urjver =urjver*toonuud3[i];
}
console.log('niilber:'+niilber);
console.log('urjver:'+urjver);
var body=document.getElementsByTagName("body")[0];
var colors = ['black','blue','brown','red','green'];
var i=-1;
function change(){
	i++;
	body.style.backgroundColor=colors[i];
	if(i>4){
		i=0;
		body.style.backgroundColor=colors[i];
	}
}
function butsah (){
	i--;
	if(i<0){
		i=4;
	}
	body.style.backgroundColor=colors[i];
}
// setTimeout -> func-iig her hugatsaanii daraa ajilhiig zaana
var s;
var autoBtn = document.querySelector('.auto')
var stopBtn = document.querySelector('.stop')
function auto(){
	i++;
	if(i>4){
		i=0;
	}	
	body.style.backgroundColor=colors[i]
	s=setTimeout(auto,1000);
	autoBtn.disabled= true;
	stopBtn.disabled= false;
}
function stop(){
	clearTimeout(s);
	autoBtn.disabled= false;
	stopBtn.disabled= true;
}
