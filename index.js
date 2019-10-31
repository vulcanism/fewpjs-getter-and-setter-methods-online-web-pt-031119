class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.diameter * Math.PI
  }

  get area() {
    return Math.PI * (this.radius * this.radius)
  }

  set diameter() {

  }

  set circumference() {

  }
}
