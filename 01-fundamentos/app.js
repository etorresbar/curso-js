var heightPamsho = 1.74;
var weightPamsho = 60;

var heightLalo = 1.78;
var weightLalo = 70;

var imcLalo = weightLalo / (heightLalo * heightLalo);
var imcPamsho = weightPamsho / (heightPamsho * heightPamsho);

console.log(imcLalo);
console.log(imcPamsho);

if (imcLalo > imcPamsho) console.log("IMC lalo es mayor");
else console.log("IMC pamsho es mayor");
