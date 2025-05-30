const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
const myNewPromise = new Promise(myExecutor);

async function myExecutor(res, rej) {
  setTimeout(res, 5000);
}

function orderSunglasses() {
  return new Promise(myExecutor);
}

const woow = orderSunglasses();

woow.then((value) => {
  console.log(value);
});
