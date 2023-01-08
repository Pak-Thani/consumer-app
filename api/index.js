import constant from "./constant";
import { fetchGet } from "./utils";

const { CONSUMER_API_BASE_URL } = constant;

export async function getAllCustomSection() {
  // https://pakthani-644xh.ondigitalocean.app/api/custom-sections/
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/custom-sections/`);
}
export async function getAllCategory() {
  // https://pakthani-644xh.ondigitalocean.app/api/category/
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/category/`);
}

export async function getProductByProductSlug(slug) {
  // https://pakthani-644xh.ondigitalocean.app/api/product/shiroul
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/product/${slug}`);
}
//https://pakthani-644xh.ondigitalocean.app/api/category/seafood
export async function getCategoryProducyByCategorySlug(slug) {
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/category/${slug}`);
}

export async function getProductBySearch(slug) {
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/search/${slug}`);
}
