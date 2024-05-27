let cars = ["xuv","breeza","bmw"];
//let cars1 = new Array("xuv","breeza","bmw");
console.log(cars);
console.log(cars[1]);
//change value at index1
cars[1]="audi";
console.log(cars);

for(ele of cars)
    {
        console.log(ele);
    }

    console.log(typeof cars);
   console.log(Array.isArray(cars));
   console.log(cars.sort());
   //console.log(cars.pop());
   //console.log(cars.splice(1,2));
   console.log(cars.push("volvo"));
   console.log(cars);
