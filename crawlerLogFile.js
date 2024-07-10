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

        layers = log === "../" ? (
            Math.max(0, layers - 1)
        ) : layers + 1
    }
    return layers;
};

const minOp = minOperations(["d1/", "d2/", "../", "d21/", "./"]);
console.log("minOp: ", minOp);
