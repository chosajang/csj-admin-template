const headerHTML = `
<!--// mobile menu icon -->
<div id="mobile-menu-btn" class="flex flex-none items-center px-4 bg-gray-800 md:hidden cursor-pointer text-gray-200">
  <i class="fas fa-bars text-2xl"></i>
</div>
<!--// logo -->
<div class="flex flex-grow md:w-64 items-center z-10">
  <a href="#" class="flex m-auto md:ml-3 text-lg text-gray-200 items-center font-semibold tracking-widest uppercase focus:outline-none focus:shadow-outline">
    <!-- <object type="image/svg+xml" class="w-8 h-8 mr-2" data="/assets/images/tailwindcss-logo.svg"></object> -->
    <img class="w-8 h-8 mr-2" src="/assets/images/wind-logo.png"/>
    <!-- <i class="fas fa-wind"></i> -->
    CSJ Admin Template
  </a>
</div>
<!--// personal menu -->
<div class="flex flex-none items-center px-4 z-11">
  <div id="personal-info" class="mr-4 text-gray-200 cursor-pointer"><i class="fas fa-user text-2xl"></i></div>
  <div id="personal-menu" class="fixed hidden top-16 right-1 w-40 rounded-sm bg-white z-20 border border-top-none border-solid border-gray-300">
    <ul class="w-full text-sm select-none">
      <li class="pl-2 py-2 cursor-pointer hover:bg-blue-400 hover:text-white"><i class="fas fa-user-circle"></i> Profile</li>
      <li class="pl-2 py-2 cursor-pointer hover:bg-blue-400 hover:text-white"><i class="fas fa-sign-out-alt"></i> Logout</li>
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
  headerObj.classList.add('flex', 'flex-none', 'w-full', 'h-16', 'bg-gray-800', 'sticky', 'top-0', 'z-10');
  // 헤더 HTML 삽입
  headerObj.innerHTML = headerHTML;
  
  // 헤더 : 개인 메뉴
  const personalInfoObj = document.getElementById('personal-info');
  const personalMenuObj = document.getElementById('personal-menu');
  personalInfoObj.addEventListener('click',() => {
    personalMenuObj.classList.toggle('hidden');
  });
});