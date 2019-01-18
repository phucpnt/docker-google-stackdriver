setInterval(() => {
  console.info(JSON.stringify({hello: 'info'}));
}, 1000);

setInterval(() => {
  console.error(JSON.stringify({hello: 'error'}));
}, 5000);