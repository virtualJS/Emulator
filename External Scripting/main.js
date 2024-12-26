const worker = new Worker('worker.js');

worker.onmessage = (event) => {
  console.log("Random Date:", event.data);
};

// Schedule the task (replace with your desired interval)
setInterval(() => {
  worker.postMessage('start'); // Send a message to trigger the worker
}, 60000); // Run every minute
