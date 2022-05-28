console.log('Hello world!');
/*if (2<1) {
   console.log('true')
} else {
   console.log('false')
}*/
//(2>1) ? console.log('true') : console.log('false')
/*firstFor: for (let num = 0; num < 2; num++){
   for (let size = 0; size < 3; size++){
      if (size == 2) {
         break firstFor;
      }
      console.log(num);
      console.log(size);
   }
}*/
let num = 0
myWhile: while (num < 5) {
   num++
   console.log(num)
   for (size = 0;size < 5;size++) {
   if (size == 4) {
      break myWhile;
   }
   console.log(size)
   }
}