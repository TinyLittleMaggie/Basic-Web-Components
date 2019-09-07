// Make tabs clickable & dynamic
var tabs = document.querySelectorAll('.tabs-item');
for (i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function(event) {
    document.querySelector('.active').classList.remove('active');
    event.target.closest('.tabs-item').classList.add('active');
  })
}
