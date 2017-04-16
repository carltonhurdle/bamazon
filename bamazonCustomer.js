//Create the require variables for the npm packages
var mysql = require('mysql');
var inquirer = require('inquirer');

//Create the connection to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "TestDatabase1234!",
	database: "bamazon"
})

//test the connection
connection.connect(function(err){
	if (err) throw err;
	console.log("huzzah!")
})

//Collect the data from the database and print it to the screen
/*
			`item_id` INTEGER(11) AUTO_INCREMENT NOT NULL,
            `product_name` varchar(100) Not Null, 
			`department_name` varchar(50) Not Null, 
			`price` DECIMAL(10,3) Not Null,
            `stock_quantity` DECIMAL(10,3) Not Null,
            PRIMARY KEY (`item_id`)
*/
var makeTable = function(){
	connection.query("SELECT * FROM products", function(err,res){
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].item_id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + res[i].price + " || " + 
				res[i].stock_quantity + "\n");
		}
	promptCustomer(res);
	})
}

var promptCustomer = function(res){
	inquirer.prompt([{
		type: 'input',
		name: 'choice',
		message: "What would you like to purchase? [Quit with Q]"
	}]).then(function(answer){
		var correct = false;
		if(answer.choice.toUpperCase()=="Q"){
			process.exit();
		}
		for(var i=0; i<res.length; i++){
			if(res[i].product_name==answer.choice){
				correct=true;
				var product = answer.choice;
				var id = i;
				inquirer.prompt({
					type: "input", 
					name: "quant",
					message: "How many would you like to buy?",
					validate: function(value){
						if(isNaN(value)==false){
							return true;
						} else {
							return false;
						}
					}
					}).then(function(answer){
						if((res[id].stock_quantity - answer.quant) >0){
							connection.query("UPDATE products SET stock_quantity = '" + (res[id].stock_quantity - answer.quant) +"' WHERE product_name = '" + product + "'", function(err,res2){
								console.log("Product Purchased!");
								makeTable();
							})
						} else {
							console.log("Not a valid selection!");
							promptCustomer(res);
						}
					})
				}
			}
		if(i==res.length && correct==false){
			console.log("Not a valid selection!");
			promptCustomer(res);
		}
	})
}


