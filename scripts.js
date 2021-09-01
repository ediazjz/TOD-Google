const searchInput = document.getElementById("searchInput")
const searchContainer = document.getElementsByClassName("search")[0]

document.addEventListener('click', (e) => {
  let isClickInside = searchInput.contains(e.target)

  isClickInside
    ? searchContainer.classList.add("search-focused")
    : searchContainer.classList.remove("search-focused")
})
