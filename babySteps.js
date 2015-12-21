var numbers = process.argv.slice(2);
var sum = 0;
for (var x=0;x<numbers.length;x++) {
    sum += +numbers[x];
}
console.log(sum);