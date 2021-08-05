const headerHTML = `
<!--// logo -->
<div class="flex flex-grow items-center z-10">
  <!--// mobile menu icon -->
  <div id="mobile-menu-btn" class="hidden flex flex-none px-4 items-center md:hidden cursor-pointer text-gray-600">
    <i class="fas fa-bars text-2xl"></i>
  </div>
  <a href="/p/blog" class="flex ml-4 md:ml-10 text-xl text-black items-center font-normal tracking-widest uppercase focus:outline-none focus:shadow-outline">
    조사장 블로그
  </a>
</div>
<!--// search menu -->
<div class="flex flex-none items-center px-2 md:px-4 md:mr-4 z-11 relative min-w-min">
  <input class="w-40 md:w-48 h-10 pl-4 pr-8 py-1 text-lg md:text-xl text-gray-700 font-medium outline-none border-transparent border-b-2 border-gray-200 hover:border-yellow-400 focus:border-yellow-400 focus:bg-white duration-300" type="text" maxlength=20 placeholder="검색">
  <span id="search-icon" class="absolute right-4 md:right-28 text-gray-600 cursor-pointer"><i class="fas fa-search text-2xl"></i></span>
  <div class="ml-4 cursor-pointer" onclick="location.href='/'">
    <i class="fas fa-door-open text-xl text-gray-700"></i> 나가기
  </div>
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
});