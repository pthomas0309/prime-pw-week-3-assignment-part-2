console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for(let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
// to accomplish this we must change the value that i is to be less than from 4 to 6
for( let i=0; i<6; i++ ){
  console.log( i );
}
// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
// we must change the value of i to three because i is the starting point
for( let i=3; i<6; i++ ){
  console.log( i );
}
// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
// we have to write a conditional that checks for numbers divisible by 2 with a remainder of 0
for( let i=2; i<11; i++ ){
  if( [ i % 2 ] == 0 ){
    console.log( i );
  }
}
// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for( let i=5; i>=0; i-- ){
  console.log( i );

}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for( names of stars ){
  console.log( names );
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
let i = 0;
console.log('Some stars using while:');
while( stars[ i ] ){
  console.log( stars[ i ] );
  i++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
let index = 0;
let max = 5;
console.log('count from 0 to 5');
while( index < max ){
  console.log( index );
  index++;
}
console.log( max );

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
index = 10
let baseline = 5
console.log('count backwards from 10 to 5');
while( index > baseline ){
  console.log( index );
  index--
}
console.log( baseline );
