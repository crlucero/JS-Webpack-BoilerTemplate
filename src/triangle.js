export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2= side2;
  this.side3=side3;
}


Triangle.prototype.checkType = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  }
};

Triangle.prototype.isEqualateral = function() {
  if((this.side1 == this.side2) && (this.side2 == this.side3)) {
    return "this is equalateral";
  }
}

Triangle.prototype.isIsosceles = function() {
  if(((this.side1 == this.side2) && (this.side2 != this.side3)) || ((this.side2 == this.side3) && (this.side1 != this.side2))) {
    return "this is isosceles";
  }
}

Triangle.prototype.isScalene = function() {
  if((this.checkType() != "not a triangle") && (this.side1 != this.side2) && (this.side2 != this.side3)) {
    return "this is a scalene triangle";
  }
};