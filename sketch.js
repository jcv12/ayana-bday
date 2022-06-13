n = 3;
d = 4;

theta = 0;
rmax = 130; // edge of screen is 200

background_color = [0,0,0]; // black
flower_color = [255,153,255]; // gray

function draw() {
  
    r = rmax * cos(n/d * theta);
    x = r * cos(theta);
    y = r * sin(theta);
    drawPoint(x, y, flower_color);
  
  theta += 0.005;
}