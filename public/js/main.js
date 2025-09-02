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
  let currentIndex = 0;

  function loadPages(idx) {
    const key = index_pages[idx];
    if (!key) return;

    $(".left .content").load(pages[key].page_left);
    $(".right .content").load(pages[key].page_right);

    $(".left .pagination").text(idx * 2 + 1);
    $(".right .pagination").text(idx * 2 + 2);
  }

  function flipForward() {
    const $left = $(".page.left");
    const $right = $(".page.right");

    $right.addClass("flip-forward");

    setTimeout(() => {
      currentIndex++;
      loadPages(currentIndex);

      $right.removeClass("flip-forward");
      $left.addClass("flip-forward");

      setTimeout(() => {
        $left.removeClass("flip-forward");
      }, 500);
    }, 500);
  }

  function flipBackward() {
    const $left = $(".page.left");
    const $right = $(".page.right");

    $left.addClass("flip-backward");

    setTimeout(() => {
      currentIndex--;
      loadPages(currentIndex);

      $left.removeClass("flip-backward");
      $right.addClass("flip-backward");

        $right.removeClass("flip-backward");
    }, 500);
  }

  // Init
  loadPages(currentIndex);

  // Navigation
  $(".nav-right").click(() => {
    if (currentIndex < index_pages.length - 1) flipForward();
  });

  $(".nav-left").click(() => {
    if (currentIndex > 0) flipBackward();
  });
});
