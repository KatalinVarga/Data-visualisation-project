//variables:

var mapOfEngland, pinSize, pinColour, yellow, lightGreen,coralRed, population, wallett;


// array showing values for disposable income left after mortgage payments:
let incomeLeftArray = [];


function setup() {
  
  createCanvas(1200, 820); 
}

function preload() {
  
// my images:
  
 mapOfEngland = loadImage('graphics/england_blank.svg');
 wallett = loadImage('graphics/WALLETT.svg');
  
// dataset:
  
 cityData = loadJSON ('datasets/cities.json');

  
}

function draw() {
  
  background(255);
  
  image (mapOfEngland,100,-455);
  
// instruction: 
  fill(191, 192, 192);
  textSize(24);
  text('Click on each',20,370);
  text('city\'s pin',20,400);
  text('to view data',20,430);

  
// title and UK data
  // setting the outline stroke to black, giving it weight and filling the sign background white
  
    stroke(0);
    strokeWeight(2);
    fill('white');
    rect(5, 5, 225, 125);
    textSize(10);
    textFont('Verdana');
  
  // text to be displayed at title (sign at top left corner)
  
    noStroke();
    fill(0);
    textSize(16);
    text('Disposable income &',15,40);
    text('mortgage payments',15,60);
    text('in major cities in England',15,80);
    textSize(12);
    text('(Population > 225,000)',15,105);
    text('(2019)',15,120);


  
  function pins(){
    
  // to allocate pins on map for cities, these are colour coded as well
    
  for (let i = 1; i < 21; i++) {
    pinSize =10;
	pinSize2 = 20;
         
  // variables to pull data from json :
    
  	pinColourDefiner = cityData[i].left_in_coins;
    pinColourDefiner2 = cityData[i].two_earners_coins;
    cityName = cityData[i].city;
    population = cityData[i].population;
    
  
  // the inner circles of a pin represent the disposable income level of single earner households:
    
	if (pinColourDefiner < 11) {
      pinColour=color('rgb(244, 78, 63)');
    } else if (pinColourDefiner > 11) {
      pinColour=color('rgb(2, 169, 158)');
    } else {
      pinColour=color('rgb(255, 153, 0)');
    }
    
 // the outer circles of a pin represent the disposable income level of double earner households (FT)- colour -coded in a traffic light system: 
    
     if (pinColourDefiner2 < 32) {
     pinColour2=color('rgb(244, 78, 63)');
     } else if (pinColourDefiner2 > 32 ) {
     pinColour2=color('rgb(2, 169, 158)');
     } else {
     pinColour2=color('rgb(255, 153, 0)');
     }
    
    stroke('white');
    fill(pinColour2);
    circle(cityData[i].locationX,cityData[i].locationY,pinSize2);
    fill(pinColour); 
    circle(cityData[i].locationX,cityData[i].locationY,pinSize);
    
// cities' names to be displayed:
    
    cityNameSize = 10;
    textSize(cityNameSize);
    
    fill(0);
    text(cityName, cityData[i].locationX-15,cityData[i].locationY-11);
   
   }
}  // end of pins function
  
  
  function zoomInCityName() {
    
  // mouseover action, idea from https://stackoverflow.com/questions/59919642/p5-js-how-can-i-make-text-appear-when-my-mouse-hovers-over-a-different-text-ele : 
    
    for (let i = 1; i < 21; i++){
      
    // variable used within this function:
      
    cityName = cityData[i].city;
    population =cityData[i].population;
    netPay = cityData[i].monthly_takehome_pay;
    netPayfor2 = cityData[i].two_wages_amount
    netPayCoins = cityData[i].net_FT_wages_in_coins;
    mortgage= cityData[i].monthly_mortgage;
    disposableIncomeSingle = cityData[i].left;
    leftCoins = cityData[i].left_in_coins;
    mortgageCoins = cityData[i].mortgage_coins;
    twoEarners = cityData[i].exact_amount_left_if_two_earners;
    twoEarnersCoins = cityData[i].two_earners_coins;
    circleBackgroundX = cityData[i].locationX;
    circleBackgroundY = cityData[i].locationY;
    strokeColourDefiner = cityData[i].two_earners_coins;
    fillColourDefiner = cityData[i].left_in_coins;
    populationNumber = cityData[i].population_number/1000;
    
      
  // the following defines where the mouse hovers to trigger  the condition - 

       
       let d = dist(circleBackgroundX,circleBackgroundY, mouseX,mouseY);
 
// The distance from the centre of the pins should not be bigger than 10px ( the radius is only 5 but I am giving it some extra pixels so clicking on the pins does not need to be exact but rather approximate)      
      
       if (d < 10 && mouseIsPressed){
        
// translating the canvas coordinates 0,0 to the centre of city pins:      
        push();
        translate(circleBackgroundX,circleBackgroundY);
       
    // circle background fill will have the same colour code as the pins' inner circles:
         
       if (fillColourDefiner < 11) {
       fillColour=color('rgb(244, 78, 63)');
        } else if (fillColourDefiner > 11) {
       fillColour=color('rgb(2, 169, 158)');
        } else {
       fillColour=color('rgb(255, 153, 0)');
       }
       
   // the outer circles of a pin represent the disposable income level of two-earner households-       here it is the stroke of the circle:  
         
       if (strokeColourDefiner < 32) {
       strokeColour=color('rgb(244, 78, 63)');
      } else if (strokeColourDefiner > 32 ) {
       strokeColour=color('rgb(2, 169, 158)');
      } else {
      strokeColour=color('rgb(255, 153, 0)');
      }
       
     // background size will grow if a city is significantly bigger, bg round circle radius will change accordingly.
       
      let circleSize;
     
      if (populationNumber < 300){
        
        circleSize = 180
        
      } else if (300 < populationNumber && populationNumber < 400 ){
        
        circleSize =250
        
      } else if (400 < populationNumber && populationNumber < 600 ){
        
        circleSize = 300
        
      } else {
        
        circleSize = 400
      }
  
      strokeWeight(50);
      stroke(strokeColour);
      fill (fillColour);
      circle(0,0,circleSize)
       
    // text to be displayed within the round background:
      noStroke();
      fill ('white');
      textSize (20);
      text(cityName, -50, -31);
      text('Population: '+population, -110, 0);
      pop(); 
     // colour of rectangles as background for text on the left, colour codes single-earner       households and two-earner households based on UK median. These information are displayed on the left to show calculation and exact data.
      textSize (16);
      fill(207, 208, 215);
      rect (5,300,225,100);
      fill(fillColour);
      rect (5,400,225,70);
      fill(strokeColour);
      rect (5,445,225,55);
      noStroke();  
      fill(0);
      text('Single income household ', 20, 328);
      text('Net income: '+netPay, 20, 358);
       
  // Booleans used to make sure the right amount of spaces are left between words and numbers:
  //  ( to make calculation looking neat )   
       
    if (mortgageCoins > 10) {
    text('Mortgage: - '+mortgage, 20, 381);
    }
    if (mortgageCoins === 10) {
    text('Mortgage: - '+mortgage, 20, 381);
    }
    if (mortgageCoins < 10) {
    text('Mortgage: -    '+mortgage, 20, 381);
    }
    strokeWeight(1.5);
     stroke(0);
     line(121, 390, 190, 390);
    noStroke();
    if (leftCoins > 10){
    text('Income left: '+disposableIncomeSingle, 20, 420); } 
   
    if (leftCoins < 10){
    text('Income left:   '+disposableIncomeSingle, 20, 420); }
     else {
    text('Income left: '+disposableIncomeSingle, 20, 420); }
    text('With two earners:', 20, 470);
    text(twoEarners, 143, 493);
    textSize(12);
    text('(Monthly median figures) ', 20, 540);
  // ...end of text display on the left
       
 // The following is to display bar graphs on the right. 
  //  London is handled separately as its data requires longer bars, i.e. more space so bars are  positioned differently
       
    if (cityName === 'London')  {
  // title for the whole of the bars 
    fill(0);
    text ('net income: '+netPay,650,35);
    text ('net income: '+netPayfor2,650,125);
   // bars  - single earner household:  
    fill(207, 208, 215) ;
    rect(650,40, netPayCoins*10,60);  
    fill(fillColour) ;
    rect(650,40,leftCoins*10,60,); 
      
    // double earner household:      
    fill(207, 208, 215);
    rect(650,130, netPayCoins*2*10,60);  
    fill(strokeColour);
    rect(650,130,twoEarnersCoins*10,60);
      
    // symbol for single income household:
    image (wallett,650,55);
    // symbol for two earners:  
    image (wallett,650,145);
    image (wallett,700,145);
    
    // amount left in pocket displayed - single and double earner households:
    fill('white');
    text(disposableIncomeSingle, 652, 53); 
    text(twoEarners, 652, 142);  
   
    // label and amount for mortgage part on bar -for singles:
    fill(51, 58, 72);
    text (mortgage,655+leftCoins*10,75); 
    text ('mortgage',655+leftCoins*10,90);  
    // label and amount for mortgage part on bar -couples:
    fill(51, 58, 72);
    text (mortgage,655+twoEarnersCoins*10,165); 
    text ('mortgage',655+twoEarnersCoins*10,180);
      
  // Brighton's disposable income part in red is too short on the bar, so I am pushing the word 'mortgage' a bit further on the right -I am applying the same position for the bars for other cities which are on the southern coast,too 
      
    }else if (cityName === 'Brighton'||cityName === 'Southampton' || cityName === 'Portsmouth' )  {
  // text for bars (titles):
    fill(0);
    text ('net income: '+netPay,750,200);
    text ('net income: '+netPayfor2,750,290);  
  // bars - 1st bar for single earners    
    fill(207, 208, 215) 
    rect(750,210, netPayCoins*10,60);  
    fill(fillColour) 
    rect(750,210,leftCoins*10,60,);
  // second bar for couples:
    fill(207, 208, 215);
    rect(750,300, netPayCoins*2*10,60);  
    fill(strokeColour);
    rect(750,300,twoEarnersCoins*10,60);
      
  // symbol for single income household:
    image (wallett,750,225);
  // symbol for two earners:  
    image (wallett,750,315);
    image (wallett,800,315);
   // exact amount of disposable income (after mortgage payments)   
    fill('white');
    text(disposableIncomeSingle, 752, 223); 
    text(twoEarners, 752, 312); 
    
    // label and amount for mortgage part on bar -singles:
    fill(51, 58, 72);
    text (mortgage,770+leftCoins*10,245);
    text ('mortgage',770+leftCoins*10,260);
     // label and amount for mortgage part on bar -couples:
    fill(51, 58, 72);
    text (mortgage,765+twoEarnersCoins*10,337);
    text ('mortgage',765+twoEarnersCoins*10,352);
    
      
      // The word 'mortgage' does not need to be pushed further on the right for Plymouth, so handling Plymouth separately
      
    }else if (cityName === 'Plymouth')  {
   // text for bars (titles):
    fill(0);
    text ('net income: '+netPay,750,203);
    text ('net income: '+netPayfor2,750,295); 
      
    fill(207, 208, 215) 
    rect(750,210, netPayCoins*10,60);  
    fill(fillColour) 
    rect(750,210,leftCoins*10,60,);

    fill(207, 208, 215);
    rect(750,300, netPayCoins*2*10,60);  
    fill(strokeColour);
    rect(750,300,twoEarnersCoins*10,60);
    // symbol for single income household:
    image (wallett,750,225);
    // symbol for two earners:  
    image (wallett,750,315);
    image (wallett,800,315);
      
    fill('white');
    text(disposableIncomeSingle, 752, 223); 
    text(twoEarners, 752, 312); 
    
    // label for mortgage part on bar +mortgage amount-singles:
    fill(51, 58, 72);
    text (mortgage,755+leftCoins*10,245);
    text ('mortgage',755+leftCoins*10,260);
     // label for mortgage part on bar+mortgage amount -couples:
    fill(51, 58, 72);
    text (mortgage,755+twoEarnersCoins*10,338);
    text ('mortgage',755+twoEarnersCoins*10,352);
    
    } else {
    // for all other cities:  
      
    // text for bars (titles):
    fill(0);
    text ('net income: '+netPay,750,35);
    text ('net income: '+netPayfor2,750,125); 
      
    // graph bars- single earner household:
    fill(207, 208, 215) 
    rect(750,40, netPayCoins*10,60);  
    fill(fillColour) 
    rect(750,40,leftCoins*10,60,);
      
    // graph bars- two-earners:  
    fill(207, 208, 215);
    rect(750,130, netPayCoins*2*10,60);  
    fill(strokeColour);
    rect(750,130,twoEarnersCoins*10,60);
      
    // symbol for single income household:
    image (wallett,750,55);
    // symbol for two earners:  
    image (wallett,750,145);
    image (wallett,800,145);
      
    // amount left displayed on bars:
    fill('white');
    text(disposableIncomeSingle, 752, 53); 
    text(twoEarners, 752, 142); 
    
    // label for mortgage part on bar -singles:
    fill(51, 58, 72);
    text (mortgage,755+leftCoins*10,75);
    text ('mortgage',755+leftCoins*10,90);
      
    // label for mortgage part on bar -couples:
    fill(51, 58, 72);
    text (mortgage,755+twoEarnersCoins*10,168);
    text ('mortgage',755+twoEarnersCoins*10,182);
     }
    
     }
  }

  } // end of function ZoomInCityName

function colourCode (){
    // colour code explanation for pins:
    noStroke();
    fill(244, 78, 63);
    rect(115,720, 30, 15);
    fill(255, 153, 0);
    rect(115,740, 30, 15);
    fill(2, 169, 158);
    rect(115,760, 30, 15);
    fill(0);
    textSize(14);
    text('Disposable income ',10,690);
    textSize(10);
    text('(after mortgage payments): ',10,710);
    textSize(10);
    fill(0);
    text('below UK median',10,730);
    fill(0);
    text('around UK median',10,750);
    fill(0);
    text('above UK median',10,770);
    
  }
 
 colourCode();
 pins();
 zoomInCityName();
  

} 