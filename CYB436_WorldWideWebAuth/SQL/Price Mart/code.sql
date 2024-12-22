/* CREATE AND POPULATE TABLE ITEMLIST */
create table itemlist
 (Code number(5),
  Item varchar(15),
  Price number(3,2),
  Taxable varchar(1));
  
 insert into itemlist
  (Code, Item, Price, Taxable)
  values (1111, 'Grapes', 1.99, ' ');

 insert into itemlist
  (Code, Item, Price, Taxable)
  values (1112, 'Apples', 1.49, ' ');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1113, 'Paper Towels', 5.79, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1114, 'Toilet Paper', 4.69, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1115, 'Light Bulb', 3.99, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1116, 'XBOX 360 Console', 299.99, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1117, 'Jacks Frozen Pizza', 2.99, ' ');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1118, 'Eggs', 1.29, ' ');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1119, 'Milk', 3.49, ' ');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1120, 'Sandals', 13.50, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1121, 'Garbage Bags', 6.99, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1122, 'Laundry Detergent', 5.79, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1123, 'Bread', 1.79, ' ');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1124, 'Hangers', 3.19, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1125, 'Staples', 0.99, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1126, 'Pencils', 1.09, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1127, '300w Stereo System', 249.99, '*');
  
  insert into itemlist
  (Code, Item, Price, Taxable)
  values (1128, '32 LCD TV', 325.99, '*');
  
  
  
  
/* Create and fill table Receipt One */
create table receipt1
 (Code number(5),
  Quantity number(2)); 
  
  
 insert into receipt1
  (Code, Quantity)
  values (1128, 1);  
  
 insert into receipt1
  (Code, Quantity)
  values (1123, 1);

 insert into receipt1
  (Code, Quantity)
  values (1111, 2);

 insert into receipt1
  (Code, Quantity)
  values (1125, 2);    
  
  
  
/* Create and fill table Receipt Two */
create table receipt2
 (Code number(5),
  Quantity number(2)); 
  
  insert into receipt2
  (Code, Quantity)
  values (1117, 5);  
  
 insert into receipt2
  (Code, Quantity)
  values (1123, 1);
  
  
  
/* Display Receipt One With updated Prices */
select receipt1.Code, itemlist.Item, receipt1.Quantity, (receipt1.Quantity * itemlist.Price)
from itemlist
inner join receipt1
on itemlist.Code = receipt1.Code;


  
/* Display Receipt Two With updated Prices */
select receipt2.Code, itemlist.Item, receipt2.Quantity, (receipt2.Quantity * itemlist.Price)
from itemlist
inner join receipt1
on itemlist.Code = receipt2.Code;
  
  
  
/* Display Complete Item List */
select *
from itemlist;



/* Display Taxable Items */
select receipt1.Code, receipt2.Code, itemlist.Item, itemlist.Taxable
from itemlist
inner join receipt1
on itemlist.Code = receipt1.Code
inner join receipt2
on itemlist.Code = receipt2.Code
where itemlist.Taxable = '*';



/* Display All Sold Items */
select receipt1.Code, receipt1.Quantity, receipt2.Code, receipt2.Quantity, itemlist.Item
from itemlist
inner join receipt1
on itemlist.Code = receipt1.Code
inner join receipt2
on itemlist.Code = receipt2.Code;

 

	
  