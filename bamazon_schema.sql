CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
			`item_id` INTEGER(11) AUTO_INCREMENT NOT NULL,
            `product_name` varchar(100) Not Null, 
			`department_name` varchar(50) Not Null, 
			`price` DECIMAL(10,3) Not Null,
            `stock_quantity` DECIMAL(10,3) Not Null,
            PRIMARY KEY (`item_id`)
);

insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Great Movie', 'DVD', 29.99, 100);

insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Bad Movie', 'DVD', 19.99, 100);
  
insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Great Book', 'Books', 34.99, 100);
  
insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Bad Book', 'Books', 9.99, 100);
  
insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Great TV', 'Electronics', 299.99, 50);
  
insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Bad TV', 'Electronics', 99.99, 100);
  
insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Great Toys', 'Children', 29.99, 100);
  
insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Bad Toys', 'Children', 2.99, 100);
  
insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Great Pants', 'Clothing', 49.99, 100);
  
insert into products
  (product_name, department_name, price, stock_quantity)
  values ('Bad Pants', 'Clothing', 9.99, 100);
  
  