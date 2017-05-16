/**
 * Created by custo on 12.05.17.
 */

const intervalId = setInterval(() => {
  // console.log('Simple log')
  console.log('--\tOh, shit!');
  console.log('\tI am multiline log.')
}, 500);


process.on('SIGINT', function() {
  clearInterval(intervalId);
  console.log('--\tBye!');
});
