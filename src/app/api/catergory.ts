import { instance } from "./instance";

const getKeyValueCategory = async () => {

    const res = await instance.get("category/keyValueCategory")
    return res?.data?.data
}
export {
    getKeyValueCategory
}