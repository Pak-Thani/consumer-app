import constant from "./constant";
import { fetchGet } from "./utils";

const { CONSUMER_API_BASE_URL } = constant;

export async function getAllCustomSection() {
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/custom-sections/`);
}
export async function getAllCategory() {
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/category/`);
}

export async function getProductByProductSlug(slug) {
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/product/${slug}`);
}
//https://pakthani-644xh.ondigitalocean.app/api/category/sayuran
export async function getCategoryProducyByCategorySlug(slug) {
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/category/${slug}`);
}

export async function getProductBySearch(slug) {
  return fetchGet(`${CONSUMER_API_BASE_URL}/api/search/${slug}`);
}
