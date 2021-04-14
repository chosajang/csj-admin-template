/**
 * DOM 트리 완성 후 실행
 */
 document.addEventListener("DOMContentLoaded", function(){
  // 사이드바 객체 
  let asideObj = document.getElementById('aside-menu');
  // 사이드바 class 삽입
  // asideObj.classList.add('shadow-md','bg-gray-700','text-gray-200','text-sm','items-center','hidden','md:block','left-0','fixed','top-16','bottom-0','overflow-y-auto','flex-row','flex-no-wrap','overflow-hidden','w-52','z-10');
  // 사이드바 HTML 삽입
  // asideObj.innerHTML = asideHTML;
  
  // 메뉴 펼침/닫힘 이벤트
  const liList = document.getElementById('menu-ext').querySelectorAll("li");
  liList.forEach( liObj => {
    liObj.addEventListener('click', () => {
      const extMenuObj = document.getElementById(liObj.getAttribute('for'));
      if(extMenuObj != null ){
        extMenuObj.classList.toggle('hidden');
        const iObj = liObj.children[1].querySelector("i")
        iObj.classList.toggle('rotate-90');
      }
    });
  });
  
  // 모바일 메뉴 이벤트
  const btnMobileMenuObj = document.getElementById('mobile-menu-btn');
  
  btnMobileMenuObj.addEventListener('click',() => {
    asideObj.classList.toggle('hidden');
  });
});