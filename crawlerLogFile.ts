/**
 * @param {string[]} logs
 * @return {number}
 */
// v1
var minOperations = function (logs = []) {
    let layers = 0;
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        if (log === "../") {
            layers = layers === 0 ? layers : layers - 1
            continue
        }
        if (log === "./") {
            continue
        }
        layers++
    }
    return layers;
};
