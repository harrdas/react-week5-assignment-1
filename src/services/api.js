import { GET_CATEGORIES, GET_REGIONS } from '../urls';

export async function fetchCategories() {
  const categories = await fetch(GET_CATEGORIES);
  return categories.json();
}

export async function fetchRegions() {
  const regions = await fetch(GET_REGIONS);
  return regions.json();
}
