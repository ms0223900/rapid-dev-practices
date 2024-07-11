function* res400(err) {
    if (err.status !== 400) yield err;
    let errMessage = "400 :(";
    console.log(errMessage);
    return errMessage;
}

function* res401(err) {
    if (err.status !== 401) yield err;
    let errMessage = "401 :(";
    console.log(errMessage);
    return errMessage;
}

function* res403(err) {
    if (err.status !== 403) yield err;
    const errMessage = "403 Bad Bad :(";
    console.log(errMessage);
    return errMessage;
}

function* res404(err) {
    if (err.status !== 404) yield err;
    const errMessage = "404 Not Found :(";
    console.log(errMessage);
    return errMessage;
}

function httpErrHandler(err = { status: 400 }) {
    const errHandlerChain = [
        res400,
        res401,
        res403,
        res404,
    ];

    for (const errHandlerChainElement of errHandlerChain) {
        const res = errHandlerChainElement(err).next();
        if (res.done) {
            return res;
        }
    }
}

const httpErrHandler1 = httpErrHandler({ status: 401 });

const httpErrHandler2 = httpErrHandler({ status: 400 });
const httpErrHandler3 = httpErrHandler({ status: 404 });

console.log("httpErrHandler1: ", httpErrHandler1);
console.log("httpErrHandler2: ", httpErrHandler2);
console.log("httpErrHandler3: ", httpErrHandler3);
