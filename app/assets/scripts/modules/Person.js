class Person
{
	constructor(name, color){
		this.name = name;
		this.color = color;
	}

	greet() {

		console.log("My name is "+this.name+" my color is " + this.color);
	}
	
	
}

export default Person;