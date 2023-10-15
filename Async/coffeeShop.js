function placeOrder(drink) {
  return new Promise((res, rej) => {
    if (drink === "coffee") {
      res("Order for Coffee received");
    } else {
      rej("Order rejected");
    }
  });
}

function processOrder(order) {
  return new Promise((res) => {
    console.log("order is being processed");
    res(`${order} and is served`);
  });
}

/*

placeOrder('coffee').then((orderPlaced)=>{
    console.log(orderPlaced);
    const orderIsProcessed=processOrder(orderPlaced);

    return orderIsProcessed;
}).then((processedOrder)=>{
    console.log(processedOrder);
}).catch((err)=> console.log(err));

*/

// above is chaining of Promise

//------Async Await----------  it is just a syntactic sugar for above chaining of Promises

async function serveOrder() {
  try {
    const orderPlaced = await placeOrder("coffee");
    console.log(orderPlaced);

    const orderIsProcessed = await processOrder(orderPlaced);
    console.log(orderIsProcessed);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
