function assignAisle() {
	var x = document.getElementById("category").value;
	var y;
	if (x === "Cooking Wines" || x === "Condiments" || x == "Olives") {
		y = 2;
	}
	else if (x === "Baking Items" || x === "Spices") {
		y = 5;
	}
	else if (x === "Canned Fish" || x === "Ethnic Foods" || x === "Pasta/Pasta Sauce" || x === "Rice") {
		y = 6;
	}
	else if(x === "Canned Beans" || x === "Canned Tomatoes" || x === "Soups") {
		y = 7;
	}
	else if (x === "Household Goods (Paper Towels, TP, etc)") {
		y = 8;
	}
	else if (x === "Detergent (Dish and Laundry)") {
		y = 9;
	}
	else if (x === "Breads/Bagels" || x === "Peanut Butter and Jelly") {
		y = 13;
	}
	else if (x === "Frozen Lunches/Dinners") {
		y = "11/12";
	}
	else if (x === "Frozen Veggies" || x === "Ice Cream") {
		y = 12;
	}
	else if (x === "Honey") {
		y = 13;
	}
	else if (x === "Office Supplies") {
		y = 16;
	}
	else if (x === "Personal Care and Grooming") {
		y = "17/18";
	}
	else if (x === "Medicines (OTC)") {
		y = 18;
	}
	else if (x === "Chips" || x === "Nuts") {
		y = 19;
	}
	else if (x === "Soda") {
		y = 22;
	}
	else if (x === "Pest Control") {
		y = "Front";
	}
	else if (x === "Meat") {
		y = "Meat";
	}
	else if (x === "Produce") {
		y = "Produce";
	}
	else if (x === "Seafood (Fresh or Frozen)") {
		y = "Seafood";
	}
	document.getElementById("aisle").value = y;
}

//Google Apps script needed here, if possible!
