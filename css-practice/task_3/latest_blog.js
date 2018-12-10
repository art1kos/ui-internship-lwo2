/* global document, fetch */
const latestBlogs = document.querySelector('.stories_content_info');

function latestBlogItem(model) {
  function parseDate(dateStr) {
    const monthArr = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    const day = new Date(dateStr).getDate() - 1;
    const month = monthArr[new Date(dateStr).getMonth() + 1];
    return {day: day, month: month};
  }

  const previewImg = model.previewImg;
  const title = model.title;
  const watched = model.watched;
  const description = model.description;
  const day = parseDate(model.published).day;
  const month = parseDate(model.published).month;
  const template = document.createElement('div');
  template.classList.add('stories_content_info_object');
  template.innerHTML =
  `
      <div class="img">
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

function getDataFromSever() {
  fetch('http://localhost:3000/api/blogs').then((res) => res.json()).then(showAllBlogs);
}

function showAllBlogs(res) {
  const latest = filterLatestBlogs(res);
  for (let i = 0; i < latest.length; i++) {
    latestBlogs.appendChild(latestBlogItem(latest[i]));
  }
}


function filterLatestBlogs(res) {
  const idArr = res.latest;
  const blogsArr = res.blogs;
  return blogsArr.filter((el) => idArr.includes(el.id));
}

getDataFromSever();
