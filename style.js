let block = document.querySelector('.stick-block-phone')
//
function magic() {
  if (window.pageYOffset > 400) {
  block.style.opacity = '1'
  } else { block.style.opacity = '0' }
}

// When scrolling, we run the function
window.onscroll = magic