// main.js
import { name, age, country } from './file1.js';
import { greet } from './file2.js';


document.getElementById("name").innerHTML = `<strong>Name:</strong> ${name}`;
document.getElementById("age").innerHTML = `<strong>Age:</strong> ${age}`;
document.getElementById("country").innerHTML= `<strong>Country:</strong> ${country}`;
document.getElementById("greet").textContent = greet(name);

