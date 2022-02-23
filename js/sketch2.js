let xMonthsWages, xYears ;

// array for class:
let handles = [];



function setup() {
  
  createCanvas(1000, 700);
  
   handles[0] = new Handle(200,570,12,20,170,200, 193);
  
// initial labels:
   xYears = '?';
   xMonthsWages= '?';
   xHousePrice = '?';
  
}

function preload(){
  
// dataset:
  historicalData = loadJSON ('datasets/historicalData.json');
  
// images:
 house = loadImage('graphics/house2.svg');
 cash1 = loadImage('graphics/cash1.svg');
 cash2 = loadImage('graphics/cash2.svg');
 cash3 = loadImage('graphics/cash3.svg');
 cash4 = loadImage('graphics/cash4.svg');
 cash5 = loadImage('graphics/cash5.svg');
 cash6 = loadImage('graphics/cash6.svg');
 cash7 = loadImage('graphics/cash7.svg');
 cash8 = loadImage('graphics/cash8.svg');
  
  
}


function draw() {

  background(255);

// drawing axes with marks:
  
// x axis - bar to slide on:
  noStroke();
  fill(8, 8, 12);
  rect(155,575,660,10);
  // 1st unit:
  fill(121, 134, 164);
  rect(156,576,148,8);
  // 2nd unit:
  fill(99, 112, 146);
  rect(303,576,109,8);
  // 3rd unit:
  fill(83, 94, 121);
  rect(403,576,109,8);
  // 4th unit:
  fill(66, 75, 97);
  rect(503,576,109,8);
  // 5th unit:
  fill(50, 57, 73);
  rect(603,576,109,8);
  // 6th unit:
  fill(33, 38, 48);
  rect(703,576,109,8);
  
  
//hatch marks on x axis:
    // 1960:
  fill(8, 8, 12);
  rect(205,565,2,30);
  textSize(18);
  text('1960',190,620);
    // 1970:
  fill(8, 8, 12);
  rect(305,565,2,30);
  text('1970',290,620);
    // 1980:
  fill(8, 8, 12);
  rect(405,565,2,30);
  text('1980',390,620);
    // 1990:
  fill(8, 8, 12);
  rect(505,565,2,30);
  text('1990',490,620);
    // 2000:
  fill(8, 8, 12);
  rect(605,565,2,30);
  text('2000',590,620);
    // 2010:
  fill(8, 8, 12);
  rect(705,565,2,30);
  text('2010',690,620);
    // 2020:
  fill(8, 8, 12);
  rect(790,565,2,30);
  text('2020',760,615);
    // 2021:
  fill(8, 8, 12);
  rect(805,565,2,30);
  text('2021',798,632);
  
  
// vertical y axis - average wages in years for average houseprice:
  fill(0);
  rect(150,70,10,515);
  
// hatchmarks on y axis:
     for (let i = 0; i < 500; i=i+5 ) {
     rect(130,575-i,30,1)
   }
     for (let i = 0; i < 550; i=i+50 ) {
     rect(125,575-i,35,2)
   }
// title for y axis:  
  textSize(16);
  text ('Number of years\' worth of ',70,30); 
  text ('     wages = houseprice',60,50); 
  
// numbers to label marks on Y axis:
   text('0',100,582);
   text('1',100,530);
   text('2',100,480);
   text('3',100,430);
   text('4',100,380);
   text('5',100,330);
   text('6',100,280);
   text('7',100,230);
   text('8',100,180);
   text('9',100,130);
   text('10',96,80);
  
  
     // instruction:
     fill (8, 8, 12);
     textSize(20);
     text('Move the slider along the timeline',374,675);

   scrolling();
   handles[0].draw();
  
 
  
function scrolling(){
 
 // handle follows mouse movement on x axis (mouse is pressed and its within certain boundaries for the y coordinates,too):
  
      if ( 200 < mouseX && mouseX < 815 && 535 < mouseY && mouseY < 610 && mouseIsPressed){
   handles[0].scroll();
         }
    
 // Display data for each year - number of months' wages for houseprice  
// each hatchmark pulls different data from json for the year:
      
   if (mouseX > 199 && mouseX < 292 && mouseY > 535 && mouseY < 610 && mouseIsPressed  ){
      xMonthsWages = historicalData[0].number_of_months_wages_for_houseprice;
      xYears =historicalData[0].number_of_years_worked_for_houseprice;
      xHousePrice =historicalData[0].average_houseprice;
       
   } else  if (mouseX > 292 && mouseX < 395 && mouseY > 535 && mouseY < 610 && mouseIsPressed){
      xMonthsWages = historicalData[1].number_of_months_wages_for_houseprice;
      xYears =historicalData[1].number_of_years_worked_for_houseprice;
      xHousePrice =historicalData[1].average_houseprice;
  
   } else if (mouseX > 395 && mouseX < 495 && mouseY > 535 && mouseY < 610 && mouseIsPressed){
      xMonthsWages = historicalData[2].number_of_months_wages_for_houseprice;
      xYears =historicalData[2].number_of_years_worked_for_houseprice;
      xHousePrice =historicalData[2].average_houseprice;
     
   } else if (mouseX > 495 && mouseX < 595 && mouseY > 535 && mouseY < 610 && mouseIsPressed){
      xMonthsWages = historicalData[3].number_of_months_wages_for_houseprice;
      xYears =historicalData[3].number_of_years_worked_for_houseprice;
      xHousePrice =historicalData[3].average_houseprice;
  
   } else if (mouseX > 595 && mouseX < 695 && mouseY > 535 && mouseY < 610 && mouseIsPressed){
      xMonthsWages = historicalData[4].number_of_months_wages_for_houseprice;
      xYears = historicalData[4].number_of_years_worked_for_houseprice;
      xHousePrice =historicalData[4].average_houseprice;
     
   } else if (mouseX > 695 && mouseX < 780 && mouseY > 535 && mouseY < 610 && mouseIsPressed){
      xMonthsWages = historicalData[5].number_of_months_wages_for_houseprice;
      xYears =historicalData[5].number_of_years_worked_for_houseprice;
      xHousePrice =historicalData[5].average_houseprice;
     
   }else if ( mouseX > 780  && mouseX < 800 && mouseY > 535 && mouseY < 610 && mouseIsPressed){
      xMonthsWages = historicalData[6].number_of_months_wages_for_houseprice;
      xYears =historicalData[6].number_of_years_worked_for_houseprice;
      xHousePrice =historicalData[6].average_houseprice;
     
   } else if ( mouseX > 800  && mouseY > 535 && mouseY < 610 && mouseIsPressed){
      xMonthsWages = historicalData[7].number_of_months_wages_for_houseprice;
      xYears =historicalData[7].number_of_years_worked_for_houseprice;
      xHousePrice =historicalData[7].average_houseprice;
  
        }
  
      // marker on y axis displaying years' worth of wages for houseprice - this is not data sourced but manually adjusted for visuals only- the same is repeated for each year. Also, images of banknotes are for visual purposes only :
  
  if (xMonthsWages === historicalData[0].number_of_months_wages_for_houseprice){
    
     fill(0, 95, 115);
     rect (160,325,145,250);
     image (cash1,160,325);
    
  } else if (xMonthsWages === historicalData[1].number_of_months_wages_for_houseprice){
    
      fill(0, 95, 115);
      rect (160,375,245,200);
      image (cash2,305,375);
    
      // Previous bars are shown when arriving at the next unit for a new period:
      fill(0, 95, 115);
      rect (160,325,145,250);
      image (cash1,160,325);
   
  } else if (xMonthsWages === historicalData[2].number_of_months_wages_for_houseprice){
    
      fill(0, 95, 115);
      rect (405,355,100,220);
      image (cash3,405,355);
      fill(0, 95, 115);
      rect (160,375,245,200);
      fill(0, 95, 115);
      image (cash2,305,375);
      rect (160,325,145,250);
      image (cash1,160,325);
    
  } else if (xMonthsWages === historicalData[3].number_of_months_wages_for_houseprice){
    
      fill(0, 95, 115);
      rect (500,300,105,275);
      image (cash4,500,300);
      fill(0, 95, 115);
      rect (405,355,100,220);
      fill(0, 95, 115);
      image (cash3,405,355);
      rect (160,375,245,200);
      fill(0, 95, 115);
      image (cash2,305,375);
      rect (160,325,145,250);
      image (cash1,160,325);
    
  } else if (xMonthsWages === historicalData[4].number_of_months_wages_for_houseprice) {
    
       fill(0, 95, 115);
       rect (600,325,105,250);
       image (cash5,600,325);
       fill(0, 95, 115);
       rect (500,300,105,275);
       image (cash4,500,300);
       fill(0, 95, 115);
       rect (405,355,100,220);
       fill(0, 95, 115);
       image (cash3,405,355);
       rect (160,375,245,200);
       fill(0, 95, 115);
       image (cash2,305,375);
       rect (160,325,145,250);
       image (cash1,160,325);
 
  
  } else  if (xMonthsWages === historicalData[5].number_of_months_wages_for_houseprice){
    
       fill(0, 95, 115);
       rect (700,225,90,350);
       image (cash6,700,225);
       fill(0, 95, 115);
       rect (600,325,105,250);
       image (cash5,600,325);
       fill(0, 95, 115);
       rect (500,300,105,275);
       image (cash4,500,300);
       fill(0, 95, 115);
       rect (405,355,100,220);
       fill(0, 95, 115);
       image (cash3,405,355);
       rect (160,375,245,200);
       fill(0, 95, 115);
       image (cash2,305,375);
       rect (160,325,145,250);
       image (cash1,160,325);     
  
  } else  if (xMonthsWages === historicalData[6].number_of_months_wages_for_houseprice){
    
       fill(0, 95, 115);
       rect (790,155,25,420);
       image (cash7,790,155); 
       fill(0, 95, 115);
       rect (700,225,90,350);
       image (cash6,700,225);
       fill(0, 95, 115);
       rect (600,325,105,250);
       image (cash5,600,325);
       fill(0, 95, 115);
       rect (500,300,105,275);
       image (cash4,500,300);
       fill(0, 95, 115);
       rect (405,355,100,220);
       fill(0, 95, 115);
       image (cash3,405,355);
       rect (160,375,245,200);
       fill(0, 95, 115);
       image (cash2,305,375);
       rect (160,325,145,250);
       image (cash1,160,325); 
    
  } else  if (xMonthsWages === historicalData[7].number_of_months_wages_for_houseprice){
    
       fill(0, 95, 115);
       rect (800,100,15,475);
       image (cash8,800,100); 
       fill(0, 95, 115);
       rect (790,155,25,420);
       image (cash7,790,155); 
       fill(0, 95, 115);
       rect (700,225,90,350);
       image (cash6,700,225);
       fill(0, 95, 115);
       rect (600,325,105,250);
       image (cash5,600,325);
       fill(0, 95, 115);
       rect (500,300,105,275);
       image (cash4,500,300);
       fill(0, 95, 115);
       rect (405,355,100,220);
       fill(0, 95, 115);
       image (cash3,405,355);
       rect (160,375,245,200);
       fill(0, 95, 115);
       image (cash2,305,375);
       rect (160,325,145,250);
       image (cash1,160,325); 
   
    
  }
  
  } // end of scrolling function
  
 
} // end of draw funtion
 
 
class Handle {  // scrolling handle and moving image+data
  constructor(x, y, w,h, houseX, textX,monthsX)  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.houseX = houseX;
    this.textX = textX;
    this.monthsX = monthsX;
    
   
  }
  scroll() {
      this.x= mouseX;
      this.houseX = mouseX-30;
      this.textX = mouseX;
      this.monthsX = mouseX;
     
    }
   draw() { 
  
     
    // handle:
    stroke(8, 8, 12);
    fill(237, 242, 244);
    rect(this.x,this.y,this.w,this.h);
    
 
     
    // image of house+ displayed data:
    
    noStroke();
    fill(0);
    image (house,this.houseX,230);
    fill(27, 67, 50);
    textSize(30);
    text (xYears+' years',this.x-20, 90);
    textSize(20);
    text (xMonthsWages,this.textX+5,285);
    text('months',this.monthsX-5,305);
    textSize(16);
    text (xHousePrice,this.textX+38,415);
 
   
 
    
  }
}