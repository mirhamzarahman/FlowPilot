const {
    calculateBalancingSteps,
    calculatePositiveGain
} = require("./src/flowPilot");

// Resource stabilization
const resources = [4, 6, 1];

const balancingSteps = calculateBalancingSteps(resources);

console.log(`Balancing steps: ${balancingSteps}`);

// Positive trend analysis
const observations = [7, 1, 5, 3, 6, 4];

const totalGain = calculatePositiveGain(observations);

console.log(`Positive gain: ${totalGain}`);
