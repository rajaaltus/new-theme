var $ = require('jquery');
import Person from './modules/Person';

var john = new Person("raja","blue");
john.greet();

var tom = new Person("Thomas", "Red");
tom.greet();