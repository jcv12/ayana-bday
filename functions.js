function setup() {
    mycanvas=createCanvas(800, 800);
       mycanvas.elt.style = 'width:'+displayHeight/2+'px; height:'+displayHeight/2+'px;';
    background(background_color);
    
  }
  
  function drawPoint( _x, _y,_color) {
   
    stroke(_color);
    noFill();
    strokeWeight(5);
    point(_x+width/2, (height - _y) - height/2);
    //vertex(_x+width/2, (height - _y) - height/2);
  }
  
  function reduceDenom(numerator, denominator) {
      function rec(a, b) {
          return b ? rec(b, a % b) : a;
      }
      return denominator / rec(numerator, denominator);
  }