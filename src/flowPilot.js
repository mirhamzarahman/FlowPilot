/**
 * FlowPilot
 *
 * Lightweight decision utilities for:
 * 1. Stabilizing resource distribution.
 * 2. Measuring cumulative positive movement.
 */

/**
 * Determines how many redistribution steps are required
 * before the resource system reaches a stable state.
 *
 * A step moves one unit from the most-resourced participant
 * to the least-resourced participant.
 *
 * @param {number[]} resources - Current resource levels.
 * @returns {number} Number of redistribution steps.
 */
function calculateBalancingSteps(resources) {
    let levels = [...resources];
    let steps = 0;

    while (levels[0] !== levels[1] ||
           levels[1] !== levels[2] ||
           levels[0] !== levels[2]) {

        const minimum = Math.min(...levels);
        const maximum = Math.max(...levels);

        const minimumIndex = levels.indexOf(minimum);
        const maximumIndex = levels.indexOf(maximum);

        levels[minimumIndex] += 1;
        levels[maximumIndex] -= 1;

        steps++;
    }

    return steps;
}

/**
 * Calculates the cumulative positive movement
 * within a sequence of observations.
 *
 * @param {number[]} values - Sequential observations.
 * @returns {number} Total positive movement.
 */
function calculatePositiveGain(values) {
    let totalGain = 0;

    for (let index = 1; index < values.length; index++) {
        const change = values[index] - values[index - 1];

        if (change > 0) {
            totalGain += change;
        }
    }

    return totalGain;
}

module.exports = {
    calculateBalancingSteps,
    calculatePositiveGain
};
