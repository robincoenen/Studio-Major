
let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('data_selected_b.csv', 'csv', 'header');
}

function setup() {
 	
 	background(200);
  fill(255,45,241);
  strokeWeight(10);
  
  print(table.getColumn('Title'));

	
	var yPos = 50;
	var yDistance = 120;

	// yPos is 50
  	rect(100,yPos, 200,100);
  	yPos = yPos + yDistance;
  	// now, yPos is 200

  	rect(100,yPos, 200,100);
  	
  	yPos = yPos + yDistance;
  	// now, yPos is 350
  	rect(100,yPos, 200,100);

}

function draw() {
   	print(table.getColumn('name'));
}