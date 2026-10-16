function incScalar(n) {
  return n + 1;
}

const a = 5;
const b = incScalar(a);
console.log("скалярний:");
console.dir({ a, b });

console.log("------------------------");

function incObject(num) {
  num.n += 1; 
}

const obj = { n: 5 };
incObject(obj);
console.log("за посиланням:");
console.dir(obj); 