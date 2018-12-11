function getDataFromSever() {
  fetch('http://localhost:3000/api/blogs').then((res) => res.json()).then(showAllBlogs);
}
