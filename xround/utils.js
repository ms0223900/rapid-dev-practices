export function convertTableRawData(productDetailRawData) {
    let res = [];
    const splitTableDataList = productDetailRawData.split("\n");
    for (let i = 0; i < splitTableDataList.length / 2; i++) {
        res.push([splitTableDataList[i * 2], splitTableDataList[i * 2 + 1]]);
    }
    return res;
}
