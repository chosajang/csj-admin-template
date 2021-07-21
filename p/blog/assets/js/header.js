const headerHTML = `
<!--// mobile menu icon -->
<div id="mobile-menu-btn" class="flex flex-none items-center px-6 md:hidden cursor-pointer text-gray-600">
  <i class="fas fa-bars text-2xl"></i>
</div>
<!--// logo -->
<div class="flex flex-grow items-center z-10">
  <a href="#" class="flex m-auto md:ml-10 text-xl text-black items-center font-normal tracking-widest uppercase focus:outline-none focus:shadow-outline">
    <!-- <img class="w-8 h-8 mr-2" src="${documentRoot}assets/images/hexagon.png"/> -->
    조사장 블로그
  </a>
</div>
<!--// search menu -->
<div class="flex flex-none items-center px-4 z-11">
  <div id="search-icon" class="mr-4 text-gray-600 cursor-pointer"><i class="fas fa-search text-2xl"></i></div>
</div>`;

/**
 * DOM 트리 완성 후 실행
 */
document.addEventListener("DOMContentLoaded", function(){
  // 헤더 객체 
  let headerObj = document.getElementById('header');
  // 헤더 class 삽입
  headerObj.classList.add('flex', 'flex-none', 'w-full', 'h-16', 'sticky', 'top-0', 'z-50', 'bg-white', 'border-b', 'border-gray-200');
  // 헤더 HTML 삽입
  headerObj.innerHTML = headerHTML;
  
  // 헤더 : 개인 메뉴
  const personalInfoObj = document.getElementById('personal-info');
  const personalMenuObj = document.getElementById('personal-menu');
  // personalInfoObj.addEventListener('click',() => {
  //   personalMenuObj.classList.toggle('hidden');
  // });
});