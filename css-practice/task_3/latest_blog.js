/* global document, fetch */
function renderLatestBlogItem(model) {
  const {previewImg, title, description, watched} = model;
  const {day, month} = parseDate(model.published);
  const template = document.createElement('div');
  template.classList.add('stories_content_info_object');
  template.innerHTML =
  `<div class="img">
        <img src="${previewImg}" alt="image">
        <div class="date">
          <h2>${day}</h2>
          <p>${month}</p>
        </div>
      </div>
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="divider"></div>
        <div class="stories_content_info_object_stats">
          <div class="img_view"><img src="./img/VIEW.png" alt="image"></div>
          <i>${watched}</i>
          <div class="img_view">
            <img src="./img/SPEECH_BUBBLE_2.png" alt="image">
          </div>
          <i>17</i>
        </div>
  `;
  return template;
}

function renderFooterBlogItem(model) {
  const {previewImg, title} = model;
  const {day, month, year} = parseDate(model.published);
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

function renderBlogs(container, blogs, renderer) {
  blogs.forEach((el) => container.appendChild(renderer(el)));
}


function parseDate(dateStr) {
  const monthArr = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const day = new Date(dateStr).getDate() - 1;
  const year = new Date(dateStr).getFullYear();
  const month = monthArr[new Date(dateStr).getMonth() + 1];
  return {day, month, year};
}

function getDataFromSever() {
  fetch('http://localhost:3000/api/blogs').then((res) => res.json()).then(showAllBlogs);
}

function showAllBlogs(res) {
  const latestBlogs = [];
  const footerBlogs = [];
  const latestBlogsSection = document.querySelector('.stories_content_info');
  const footerBlogsSection = document.querySelector('.footer_container_blogs');
  res.blogs.forEach((el) => {
    if (res.latest.includes(el.id)) {
      latestBlogs.push(el);
    } else {
      footerBlogs.push(el);
    }
  });
  renderBlogs(latestBlogsSection, latestBlogs, renderLatestBlogItem);
  renderBlogs(footerBlogsSection, footerBlogs, renderFooterBlogItem);
}

getDataFromSever();
