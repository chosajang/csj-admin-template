const asideHTML = `
<div class="flex flex-none items-center h-12 bg-gray-800">
  <a href="#" class="flex m-auto text-base text-gray-200 items-center font-semibold tracking-widest uppercase focus:outline-none focus:shadow-outline">
    <img class="w-6 h-6 mr-2" src="${documentRoot}assets/images/logo.png" alt="Site Logo" />
    Web Console
  </a>
</div>
<!--// Left Menu : ST -->
<div>
  <ul class="select-none" id="menu-ext">
    <li class="pt-4 py-2 pl-4"><p class="text-xs font-bold text-gray-300">기본 메뉴</p></li>
    <a href="${documentRoot}"><li class="py-3 pl-4 cursor-pointer hover:bg-gray-600 border-l-4 border-transparent hover:border-blue-500"><i class="fas fa-columns mr-4"></i>대시보드</li></a>
  </ul>
</div><!--// Left Menu : ED -->

<!--// Project Exit : ST -->
<div class="w-full absolute bottom-0 bg-blue-500 text-center flex items-center justify-center h-14 cursor-pointer" onclick="location.href='/'">
    <span class="mr-2 text-lg">프로젝트 나가기</span><img src="/p/admin/assets/images/exit-64.png" class="w-14" alt="Exit" />
</div><!--// Project Exit : ED -->
`;

/**
 * DOM 트리 완성 후 실행
 */
document.addEventListener("DOMContentLoaded", function(){
  let asideObj = document.getElementById('aside-menu');
  asideObj.classList.add('fixed','top-0','left-0','z-50','w-52','h-screen');
  asideObj.classList.add('bg-gray-800','text-gray-200','text-sm');
  asideObj.classList.add('items-center','overflow-y-auto','flex-row','flex-no-wrap','overflow-hidden','shadow-md');
  asideObj.classList.add('transform','-translate-x-52','md:translate-x-0','ease-out','duration-200');
  asideObj.innerHTML = asideHTML;
  
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

  // 주소기반 메뉴 포커스
  const currentUrl = window.location.href;
  console.log(currentUrl);
});