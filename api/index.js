import constant from "./constant"
import { fetchGet } from "./utils";

const { CONSUMER_API_BASE_URL } = constant

export async function getAllCustomSection() {
    return fetchGet(`${CONSUMER_API_BASE_URL}/api/custom-sections/`);
  }