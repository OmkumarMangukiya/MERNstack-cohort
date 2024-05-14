// Record the start time


const startTime = performance.now();

// Simulate an asynchronous operation (e.g., fetching data)
setTimeout(() => {
	// Execute your inner function here
	console.log("Inner function executed!");

	// Record the end time
	const endTime = performance.now();

	// Calculate elapsed time
	const elapsedTime = endTime - startTime;
	console.log(`Time taken: ${elapsedTime} milliseconds`);
}, 1000); // Wait for 1 second (1000 milliseconds)
