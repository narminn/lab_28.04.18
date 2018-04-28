// var obj={
// 	name:"Fazil abi",
// 	age:"18",
// 	adress:{
// 		street:"Nizami",
// 		floor:2

// 	}
// }
// function method01(){
	
// 	method02();
// }

// function method02(){
// 	a="hi";
// 	console.log(a)
// }
// method01();(
// var student={
// 	name:"naib",
// 	surname:"tehmezli",
// 	fullname:function(){
// 		return this.name;
// 	}
// }
// console.log(student.fullname());
// var sagird={
// 	name:"fazilabi",
// 	getname:function(){
// 		student.name=this.name;
// 		return this.name;
// 	}
// }
// console.log(sagird.getname());
// console.log(student.fullname());

// function Elvin () {

// 	this.name = "Sekine";
// 	this.Method01=function(){
// 		return "Salam";
// 	}

// 	// function Method02(){
// 	// 	console.log("qaqa");
// 	// 	return this;
// 	// }

// 	// function Method03(){
// 	// 	console.log("necesen?");
// 	// 	return this;
// 	// }
// }

// var obj = new Elvin();
// // obj.Method01();//Salam
// // obj.Method01().Method02();//Salam qaqa
// // obj.Method01().Method02().Method03();
// //Salam qaqa necesen?
// ;
// console.log(obj.Method01()+" Sekine");


function Method1(name){
	if(typeof name=="number"){
		return arguments[0]*5;
	}
	else if(typeof name=="string"){
		return arguments[0];
	}
}
console.log(Method1("salam"));