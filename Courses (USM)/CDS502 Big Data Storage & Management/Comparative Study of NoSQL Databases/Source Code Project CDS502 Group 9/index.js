const args = process.argv;

if (args[2]) {
if (args[3]) {
 console.log(`START: ${args[2]} END: ${args[3]}`)
 var start = new Date(args[2])
 var end = new Date(args[3])
 var result = (end - start)/1000
   
console.log(`\nTime Difference:${result} seconds`)
} else {
console.log("please insert 2nd dates")}
 } else {
console.log("please insert dates")
}