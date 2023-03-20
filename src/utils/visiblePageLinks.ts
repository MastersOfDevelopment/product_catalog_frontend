export const visiblePageLinks = (numberOfPages: number, page: string) => {
  const pages = []
  for (let i = 1; i <= numberOfPages; i++) {
    if (i >= +page - 2 && i <= +page + 2) {
      pages.push(i)
    }
  }
  return pages
}
