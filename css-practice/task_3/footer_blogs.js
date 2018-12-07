/* global document */
const footer = document.querySelector('.footer_container_blogs');

function footerBlogItem(model) {
  function parseDate(dateStr) {
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = new Date(dateStr).getDate() - 1;
    const year = new Date(dateStr).getFullYear();
    const month = monthArr[new Date(dateStr).getMonth() + 1];
    return {day: day, month: month, year: year};
  }

  const previewImg = model.previewImg;
  const title = model.title;
  const day = parseDate(model.published).day;
  const month = parseDate(model.published).month;
  const year = parseDate(model.published).year;
  const footerTemplate = document.createElement('div');
  footerTemplate.classList.add('footer_container_blogs_content');
  footerTemplate.innerHTML =
  ` <img src="${previewImg}">
    <div class="footer_container_blogs_content_text">
      <h3>${title}</h3>
      <i>${month} ${day}, ${year}</i>
    </div>
`;
  return footerTemplate;
}

function getDataFromSever1() {
  fetch('http://localhost:3000/api/blogs').then((res) => res.json()).then(showAllBlogs1);
}

function showAllBlogs1(res) {
  const latest = filterLatestBlogs1(res);
  for (let i = 0; i < latest.length; i++) {
    footer.appendChild(footerBlogItem(latest[i]));
  }
}


function filterLatestBlogs1(res) {
  const idArr = res.latest;
  const blogsArr = res.blogs;
  return blogsArr.filter((el) => !idArr.includes(el.id));
}

getDataFromSever1();
