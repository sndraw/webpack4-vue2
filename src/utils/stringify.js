/**
 * Created by sn on 2019/3/20.
 */
//参数序列化

const stringify = params => {
    if (!params || typeof params != "object") {
        return "";
    }
    let string = "";
    for (let [key, value] of Object.entries(params)) {
        string += (string ? "&" : "") + key + "=" + value;
    }
    return string;
}
export default stringify
