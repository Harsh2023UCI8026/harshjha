 
let particles = [];

 
function setup() {
   
  let canvas = createCanvas(windowWidth, windowHeight);
  
   
  canvas.style('position', 'fixed');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '-1');
}

 function draw() {
   
  background(255, 255, 255, 25);  

   
   
    for (let i = 0; i < 5; i++) {
        let p = new Particle(mouseX, mouseY);
        particles.push(p);
    }
  

  // Loop through all particles, update them, and display them
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].isFinished()) {
      // Remove the particle from the array when it's finished
      particles.splice(i, 1);
    }
  }
}

 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


 

class Particle {
  constructor(x, y) {
     
    this.x = x;
    this.y = y;
    
     
    this.vx = random(-1.5, 1.5);
    this.vy = random(-1.5, 1.5);
    
     
    this.lifespan = 255;  
     
    this.color = random(1) > 0.5 ? color(255, 0, 255) : color(30, 144, 255);
  }

   
  isFinished() {
    return this.lifespan < 0;
  }

   
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.lifespan -= 3;  
  }

   
  show() {
    noStroke();
    
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifespan);
    ellipse(this.x, this.y, 12, 12);  
  }
}