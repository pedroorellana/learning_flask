





function scaryClown() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('asdas');
    }, 2000);
  });
}

async function msg() {
  const msg = await scaryClown();
  console.log('Message:', msg);
}

msg(); 