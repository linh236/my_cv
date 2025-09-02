$(document).ready(function() {
  const pages = {
    "0": {
      page_left: "pages/infor.html",
      page_right: "pages/skill_page_1.html"
    },
    "1": {
      page_left: "pages/skill_page_2.html",
      page_right: "pages/experience_page_1.html"
    },
    "2": {
      page_left: "pages/experience_page_2.html",
      page_right: "pages/my_project.html"
    },

    "3": {
      page_left: "pages/additional.html",
      page_right: "pages/thank_you.html"
    },
  };

  const index_pages = Object.keys(pages);

  // Init
  $(".left .content").empty();
  $(".right .content").empty();

  for (let i = 0; i < index_pages.length; i++) {
    const key = index_pages[i];

    const leftPage = $("<div class='page-block'></div>");
    const rightPage = $("<div class='page-block'></div>");

    leftPage.load(pages[key].page_left);
    rightPage.load(pages[key].page_right);

    $(".left .content").append(leftPage);
    $(".right .content").append(rightPage);
  }
});
