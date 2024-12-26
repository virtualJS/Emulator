// worker.js
self.onmessage = (event) => {
  const result = generateRandomDate();
  self.postMessage(result);
};
