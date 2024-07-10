/**
 * @param {string[]} logs
 * @return {number}
 */
// v1
var minOperations = function (logs = []) {
    let layers = 0;
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        if (log === "./") continue

        const toParent = log === "../";
        layers = toParent ? (
            layers === 0 ? layers : layers - 1
        ) : layers + 1
    }
    return layers;
};
