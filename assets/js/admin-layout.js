/**
 * DOMContentLoaded
 * 문서(html,php...) 모든 자원이 로드 되었을때 발생(예:onload)하는 것이 아닌,
 * DOM 트리만 완성되면 실행되는 이벤트
 */
document.addEventListener("DOMContentLoaded", function(){
  // 메뉴 펼침/닫힘 이벤트
  const liList = document.getElementById('menu-ext').querySelectorAll("li");
  liList.forEach( liObj => {
    liObj.addEventListener('click', () => {
      const extMenuObj = document.getElementById(liObj.getAttribute('for'));
      if(extMenuObj != null ){
        extMenuObj.classList.toggle('hidden');
        const iObj = liObj.children[1].querySelector("i")
        iObj.classList.toggle('fa-rotate-90');
      }
    });
  });

  // 모바일 메뉴 이벤트
  const asideObj = document.getElementById('aside-menu');
  const btnMobileMenuObj = document.getElementById('mobile-menu-btn');

  btnMobileMenuObj.addEventListener('click',() => {
    asideObj.classList.toggle('hidden');
  });

  // 헤더 : 개인 메뉴
  const personalInfoObj = document.getElementById('personal-info');
  const personalMenuObj = document.getElementById('personal-menu');
  personalInfoObj.addEventListener('click',() => {
    personalMenuObj.classList.toggle('hidden');
  });
});