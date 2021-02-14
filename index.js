var Circle = /** @class */ (function () {
    function Circle() {
        this.radius = 1;
        this.color = "red";
    }
    Circle.prototype.getRadius = function () {
        console.log(this.radius);
    };
    Circle.prototype.getColor = function () {
        console.log(this.color);
    };
    Circle.prototype.getArea = function (r) {
        var a = 2 * Math.PI * r;
        console.log(a);
    };
    return Circle;
}());
var cir = new Circle();
cir.radius = 3.14;
cir.color = "blue";
cir.getRadius();
cir.getColor();
cir.getArea(1);
