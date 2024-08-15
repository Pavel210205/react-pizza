export default function Url(
  categoriesId: number,
  sortType: { name: string; sortProperty: string },
  searchValue: string,
  currentPage: number
) {
  const url = new URL("https://661005660640280f219c1c83.mockapi.io/Cart");
  url.searchParams.append("page", String(currentPage + 1));
  url.searchParams.append("limit", "4");
  if (categoriesId > 0)
    url.searchParams.append("category", String(categoriesId));
  url.searchParams.append("sortBy", sortType.sortProperty);
  url.searchParams.append("title", searchValue);
  if (sortType.sortProperty === "rating") {
    url.searchParams.append("order", "desc");
  } else {
    url.searchParams.append("order", "asc");
  }
  return url;
}
