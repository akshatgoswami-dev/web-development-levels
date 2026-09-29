function CreatePencil(name, company, color, price) {
  this.name = name;
  this.price = price;
  this.company = company;
  this.color = color;
}

CreatePencil.prototype.write = function (text) {
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;
  document.body.append(h1);
  console.log(h1);
};

let pencil1 = new CreatePencil("doms", "doms", "red", 5);
let pencil2 = new CreatePencil("NatRaj", "NatRaj", "blue", 10);
let pencil3 = new CreatePencil("hell", "NatRaj", "green", 10);
let pencil4 = new CreatePencil("RoTo", "NatRaj", "yellow", 10);
let pencil5 = new CreatePencil("NaRuTo", "NatRaj", "lightblue", 10);
