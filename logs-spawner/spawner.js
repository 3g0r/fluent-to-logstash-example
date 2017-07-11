/**
 * Created by custo on 12.05.17.
 */

const counters = {
  intervalId: 0,
};

const intervalId = setInterval(() => {
  // console.log('Simple log')
  console.log('--\tOh, shit!');
  console.log(counters.intervalId++);
}, 6000);

const interval2 = setInterval(() => {
  console.log('--\tValidate' + counters.intervalId);
}, 6001);

process.on('SIGINT', function() {
  clearInterval(intervalId);
  console.log('--\tBye!');
});
