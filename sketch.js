class Particle {
  constructor(x, y, vx, vy) {
    this.location = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.gravity = createVector(0, 0);
  }

  bounce() {
    if (this.location.x >= width) {
      this.location.x = width - 1;
      this.velocity.x *= -0.5;
    } else if (this.location.x <= 0) {
      this.location.x = 1;
      this.velocity.x *= -0.5;
    }
    if (this.location.y >= height) {
      this.location.y = height - 1;
      this.velocity.y *= -0.5;
    } else if (this.location.y <= 0) {
      this.location.y = 1;
      this.velocity.y *= -0.5;
    }
  }

  draw() {
    this.bounce();
    circle(this.location.x, this.location.y, 3);
    this.location.add(this.velocity);
    if (mouseIsPressed) {
      this.gravity.set(this.location.x - mouseX, this.location.y - mouseY);
      this.gravity.normalize();
      this.gravity.mult(0.2);
      this.velocity.sub(this.gravity);
    }
  }

}

particles = new Array(1000);

function setup() {
  createCanvas(windowWidth - 15, windowHeight - 20);
  for (let i = 0; i < particles.length; i++) {
    particles[i] = new Particle(random(width), random(height), random(-1,1), random(-1,1));
  }
}

function draw() {
  background(0);
  particles.forEach((particle) => particle.draw());
}

function windowResized() {
  resizeCanvas(windowWidth - 15, windowHeight - 20);
}