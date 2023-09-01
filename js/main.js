function scrollToTop(){
  window.scrollTo(0, 0)
}

window.addEventListener('scroll', function() {
  if (scrollY !== 0){
    $('#up').fadeIn()
  } else $('#up').fadeOut()
});

$(document).ready(function (){
  $('.burger').click(function (){
    $('.mobileLogo').fadeOut()
    $('.burger').fadeOut()
    $('.mobileLinks').slideDown()
    $('body').css('overflow', 'hidden')
  })

  $('.exit').click(function (){
    $('.mobileLogo').fadeIn()
    $('.burger').fadeIn()
    $('.mobileLinks').slideUp()
    $('body').css('overflow', 'auto')
  })
})
