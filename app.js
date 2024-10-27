
document.addEventListener('DOMContentLoaded', function () {
  let items = document.querySelectorAll('.Slider .list .item');
  let Next = document.getElementById('Next');
  let prev = document.getElementById('prev');
  let thumbnails = document.querySelectorAll('.thumbnails .item');
  let itemActive = 0;

  function showCarousel() {
    let itemActiveOld = document.querySelector('.Slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnails .item.active');

    if (itemActiveOld && thumbnailActiveOld) {
      itemActiveOld.classList.remove('active');
      thumbnailActiveOld.classList.remove('active');
    }

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
  }

  function updateActiveIndex(increment) {
    itemActive = (itemActive + increment + items.length) % items.length;
    showCarousel();
  }

  Next.onclick = () => updateActiveIndex(1);
  prev.onclick = () => updateActiveIndex(-1);

  setInterval(() => Next.click(), 5000);

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      itemActive = index;
      showCarousel();
    });
  });
});


// Back to top button
window.onscroll = function () {
  var backToTopButton = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

document.querySelector('.back-to-top').addEventListener('click', function (e) {
  e.preventDefault();
  scrollToTop(1000);
});

function scrollToTop(duration) {
  const startPosition = window.pageYOffset;
  const intervalTime = 15;
  const totalSteps = duration / intervalTime;
  let currentStep = 0;

  const scrollInterval = setInterval(function () {
    const progress = currentStep / totalSteps;
    const scrollPosition = startPosition * (1 - progress);
    window.scrollTo(0, scrollPosition);

    currentStep++;

    if (currentStep >= totalSteps) {
      clearInterval(scrollInterval);
    }
  }, intervalTime);
}