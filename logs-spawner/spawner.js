/**
 * Created by custo on 12.05.17.
 */

const intervalId = setInterval(() => {
  console.log('--\tOh, shit!\n\tI am multiline log.');
}, 500);


process.on('SIGINT', function() {
  clearInterval(intervalId);
  console.log('--\tBye!');
});
