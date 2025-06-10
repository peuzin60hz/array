let i : number = 0;

for (let i = 0; i <= 60; i++, i % 2 === 0) {
    if (i % 2 === 0) {
  console.log(`${i} é par`);
} else {
  console.log(`${i} é ímpar`);
}
}