const headerHTML = `
<div class="flex flex-none items-center mx-2 z-10">
  <a href="#" class="flex m-auto text text-gray-200 items-center font-semibold tracking-widest uppercase focus:outline-none focus:shadow-outline">
    <img class="w-6 h-6 mr-2" src="${documentRoot}assets/images/logo.png" alt="Site Logo" />
    Web Console
  </a>
</div>

<!--// Web:Menu -->
<div id="web-menu" class="flex flex-grow items-center text-left text-white text-sm z-11">
    <i class="md:hidden fas fa-bars text-xl mr-2"></i>
    <span class="hidden md:flex text-xs">여기에 | 메뉴가 | 하나씩 | 들어가면 | 되겠네</span>
</div>

<!--// Menu Detail -->
<div id="menu-detail" class="hidden fixed top-12 left-0 w-screen h-20 bg-gray-700 transition duration-500 ease-out">
    <div>
      <ul class="text-gray-300">
        <li class="pt-4 py-2 pl-4"><p class="text-xs font-bold">기본 메뉴</p></li>
        <li class="py-3 pl-4 cursor-pointer"><i class="fas fa-columns mr-4"></i>대시보드</li>
        <li></li>    
      </ul>    
    </div>
    
</div>

<!--// personal menu -->
<div class="flex flex-none items-center px-4 z-12">
  <span class="text-sm text-gray-400 mr-4">|</span>
  <div id="personal-info" class="mr-2 px-1 text-gray-200 cursor-pointer hover:text-yellow-500 rounded-sm border-transparent border-2 hover:border-gray-700 hover:bg-gray-700 duration-100">
    <span class="text-xs">Jonny</span>
    <i class="fas fa-cog text-sm"></i>
  </div>
  <div id="personal-menu" class="fixed hidden top-11 right-1 w-40 rounded-sm bg-white z-20 border border-top-none border-solid border-gray-300">
    <ul class="w-full text-sm select-none">
      <li class="pl-2 py-2 cursor-pointer hover:bg-blue-400 hover:text-white"><i class="fas fa-user-circle"></i> Profile</li>
      <a href="${documentRoot}login.html"><li class="pl-2 py-2 cursor-pointer hover:bg-blue-400 hover:text-white"><i class="fas fa-sign-out-alt"></i> Logout</li></a>
    </ul>
  </div>
</div>`;

/**
 * DOM 트리 완성 후 실행
 */
document.addEventListener("DOMContentLoaded", function(){
  // 헤더 객체 
  let headerObj = document.getElementById('header');
  // 헤더 class 삽입
  headerObj.classList.add('flex', 'flex-none', 'w-full', 'h-12', 'bg-gray-800', 'sticky', 'top-0', 'z-10');
  // 헤더 HTML 삽입
  headerObj.innerHTML = headerHTML;
  
  // 헤더 : 개인 메뉴
  const personalInfoObj = document.getElementById('personal-info');
  const personalMenuObj = document.getElementById('personal-menu');
  personalInfoObj.addEventListener('click',() => {
    // 개인 메뉴 클릭 이펙트
    personalInfoObj.classList.toggle('text-yellow-500');
    // 팝업 메뉴 토글
    personalMenuObj.classList.toggle('hidden');
  });

  // 웹 메뉴 버튼
  const webMenuObj = document.getElementById('web-menu');
  const menuDetailObj = document.getElementById('menu-detail');
  webMenuObj.addEventListener('click', () => {
    menuDetailObj.classList.toggle('hidden');
  });
});