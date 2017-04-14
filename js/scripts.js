//scripts.js

var iPhone7 = new Phone("Apple", "iPhone 7", 4499, "silver light");
var GalaxyS8 = new Phone("Samsung", "Galaxy S8", 3499, "orchid grey");
var P10 = new Phone("Huawei", "P10", 3099, "silver");

function Phone(brand, model, price, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.brand + ", model to " + this.model + ", kolor to " + this.color + ", a cena to " + this.price + ".");
}

Phone.prototype.review1 = function() {
	console.log("Może wreszcie następca " + this.model + " będzie lepiej dopracowany. Tuż po wakacjach się o tym dowiemy. Oby " + this.brand + " nie zmarnował okazji:)");
}

Phone.prototype.review2 = function() {
	console.log("Czy nowy " + this.model + " od " + this.brand + " pobije rekordy sprzedaży swojego poprzednika?");
}

Phone.prototype.review3 = function() {
	console.log(""+ this.model + " nie jest w stanie zagrozić największym rywalom. Nawet przy wsparciu Roberta Lewandowskiego.");
}

iPhone7.printInfo();
iPhone7.review1();
GalaxyS8.printInfo();
GalaxyS8.review2();
P10.printInfo();
P10.review3();
