const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 올해가 몇 년도인지 알게 해주는 부분
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // Date 객체 내에 저장된 메소드 getFullYear를 이용
