
/*function makeSubstract(substracter){
	let myFunc=function (x){
		return substracter -x;
	}
	return myFunc;
}
let newSubstract=makeSubstract(100);
console.log(newSubstract(3));*/

//function Circle (radius){
	//this.radius=radius;
	//this.getArea=function(){
		//return 3.14*(this.radius);
	//};
//};
//var myCircle= new Circle (10);
//console.log(myCircle.getArea());

//function Circle(radius){
	//this.radius=radius;
	//this.getArea=function(){
		//return Math.PI * Math.pow(this.radius,2);
//}
//console.log(myCircle.getArea());

/*function Circle(radius){
	this.radius=radius;
}
Circle.prototype.getArea=function(){
	Math.PI * Math.pow(this.radius,2);
}
var newOtherCircle=new Circle(20);
console.log(newOtherCircle);*/

/*var literalCircle={
	radius: 10,
	getArea: function(){
		return Math.PI * Math.pow(this.radius,2);
	}
};

console.log(literalCircle.getArea());*/


/*var literalCircle={
	radius: 10,
	getArea: function(){
		var self=this;
		var increamentRadius=function(){
			self.radius=20;
		}
		increamentRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius,2);
	}
};

console.log(literalCircle.getArea());*/

/*var array=new Array();
array[0]="yakov";
array[1]=2;
array[2]=function(name){
	console.log("hello " + name)
};
array[3]={name:"yakov"};

array[2](array[0]);*/

/*let names=["yakov","joe","prasanta"];
for(let name in names){
	console.log( "hello " +names[name]);
}*/

/*function makeMultiple(multiple){
	function b(){
		console.log(multiple);
	}
	b()
	return(
		function (x){
			return multiple * x;
		});
}
var doubleAll= makeMultiple(2);
console.log(doubleAll(10));*/
/*(function(window){
	var yakovGreeter={};
	yakovGreeter.name="prasanta";
	var greeting="hello"
    yakovGreeter.sayHello=function(){
	console.log(greeting + yakovGreeter.name)
};
window.yakovGreeter=yakovGreeter;
})(window);*/

//console.log(document.getElementById("title"));
//console.log(document instanceof HTMLDocument )
/*function sayHello(){
	var name=(document.getElementById("name").value);
	var messege="hello " + name;
	document.getElementById("content").innerHTML=messege;
	if(name==="student"){
		var title=document.querySelector("#title").textContent;
		title += "i love rupa"
		document.querySelector("#title").textContent=title;
	}
}
//document.querySelector("button").addEventListener("click",sayHello);
document.querySelector("button").onclick=sayHello;*/
/*document.addEventListener("DOMContentLoaded",
	function(event){
		function sayHello(){
	        var name=(document.getElementById("name").value);
	            var messege="hello " + name;
	            document.getElementById("content").innerHTML=messege;
	            if(name==="student"){
	        	var title=document.querySelector("#title").textContent;
		        title += "i love rupa"
		        document.querySelector("#title").textContent=title;
		    }
		}
        document.querySelector("button").addEventListener("click",sayHello);
        document.querySelector("body").addEventListener("mousemove",
        	function(event){
        		if(event.shiftKey===true){
        			console.log(event.clientx)
        		}
        	})
	});*/

	/*var letter=[1,2,3,4]
	var bc=letter.pop()
	console.log(bc)*/


/*let admin;
let name="John";
admin=name;
alert(admin);*/

/*let messege=prompt("name",)
alert(messege);*/
// function addition (num1,num2){
// 	sum=num1+num2;
// 	consle.log(sum)
// }





// function sayHello(event){
// 	//this.textContent="said it";
// 	let name=document.getElementById("name").value;
//     let messege="hiii " + name;
//     document.getElementById("content").textContent=messege;
// 	let title=document.getElementById('title').textContent;
// 	if(name==="student"){
// 		title=title +" good";
// 		document.getElementById("title").textContent=title;
// 	}
// };
//document.querySelector("button").addEventListener("click",sayHello);
//document.querySelector("button").onclick=sayHello;






let humanScore=0;
let computerScore=0;
function random(){
	let a = Math.floor(Math.random()*3);
	if(a==0){
		return 'rock';
	}else if(a==1){
		return 'paper';
	}else if(a==2){
		return 'scissor';
	}
}


let con=document.querySelector(".bc");
let von=document.querySelector(".vc");

function game(huma){
	let human=huma;
	let computer= random();
	console.log(computer);
	if(human=="rock" && computer=="rock"){
		return 0;
	}else if(human=="paper" && computer=="rock"){
		humanScore++;
		von.textContent=humanScore;
		con.textContent=computerScore;
	}else if(human=="scissor" && computer=="rock"){
		computerScore++;
		von.textContent=humanScore;
		con.textContent=computerScore;
	}else if(human=="rock" && computer=="paper"){
		computerScore++;
		von.textContent=humanScore;
		con.textContent=computerScore;
	}else if(human=="paper" && computer=="paper"){
		return 0;
	}else if(human=="scissor" && computer=="paper"){
		humanScore++;
		von.textContent=humanScore;
		con.textContent=computerScore;
	}else if(human=="rock" && computer=="scissor"){
		humanScore++;
		von.textContent=humanScore;
		con.textContent=computerScore;
	}else if(human=="paper" && computer=="scissor"){
		computerScore++;
		von.textContent=humanScore;
		con.textContent=computerScore;
	}else if(human=="scisssor" && computer=="scissor"){
		return 0;
	}
	scor();
};

function scor(){
	let mvc=document.querySelector(".mv");
	let bvc=document.querySelector(".bv");
	if(humanScore==5){
		mvc.textContent="you win  👏🏼";
		bvc.textContent="score = "+computerScore + "-" +humanScore;
		humanScore=0;
		computerScore=0;
		con.textContent=0;
		von.textContent=0;
	}else if(computerScore==5){
		mvc.textContent="computer win  👎🏼";
		bvc.textContent="score = "+computerScore + "-" +humanScore;
		humanScore=0;
		computerScore=0;
		con.textContent=0;
		von.textContent=0;
	}
};

let first=document.querySelector(".first").addEventListener('click',()=>{
	game('rock');
	console.log("rock");
});
let second=document.querySelector(".second").addEventListener('click',()=>{
	game('paper');
	console.log("paper");
});
let third=document.querySelector(".third").addEventListener('click',()=>{
	game('scissor');
	console.log("scissor");
});



