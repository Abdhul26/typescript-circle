interface Configuration {
    radius: number;
    color: string;
}

class Circle{
    radius: number = 1;
    color: string = "red";

    getRadius() {
        console.log(this.radius)
    }

     getColor() {
        console.log(this.color)
    }
    getArea(r) {
        let a = 2 * Math.PI*r;
        console.log(a);
    }
}

let cir = new Circle();
cir.radius = 3.14;
cir.color = "blue";
cir.getRadius();
cir.getColor();
cir.getArea(1);