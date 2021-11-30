const headerHTML = `
<!-- // 
<div class="flex flex-none items-center mx-2 z-10">
  <a href="#" class="flex m-auto text text-gray-200 items-center font-semibold tracking-widest uppercase focus:outline-none focus:shadow-outline">
    <img class="w-6 h-6 mr-2" src="${documentRoot}assets/images/logo.png" alt="Site Logo" />
    Web Console
  </a>
</div>
-->

<!--// Web:Menu -->
<div id="navigation" class="flex flex-grow items-center text-left text-sm z-11 pl-4">
    <i class="md:hidden fas fa-bars text-xl mr-2"></i>
    <span class="hidden md:flex text-xs">Navigation</span>
</div>

<!--// Menu Detail -->
<!--//
<div id="menu-detail" class="hidden fixed top-12 left-0 pl-52 w-screen h-20 bg-gray-700 transition duration-500 ease-out">
    <div>
      <ul class="text-gray-500">
        <li class="pt-4 py-2 pl-4"><p class="text-xs font-bold">기본 메뉴</p></li>
        <li class="py-3 pl-4 cursor-pointer"><i class="fas fa-columns mr-4"></i>대시보드</li>
        <li></li>    
      </ul>    
    </div>
</div>
-->

<!--// personal menu -->
<div class="flex flex-none items-center px-4 z-12">
  <span class="text-sm text-gray-800 mr-4">|</span>
  <div id="personal-info" class="mr-2 px-1 text-gray-800 cursor-pointer hover:text-blue-500 rounded-sm border-transparent border-2 hover:border-gray-200 hover:bg-gray-200 duration-100">
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


document.addEventListener("DOMContentLoaded", function(){
  let header = document.getElementById('header');
  header.classList.add('fixed', 'top-0', 'z-40', 'md:pl-52', 'flex', 'flex-none', 'w-full', 'h-12','border-b','border-gray-300');
  header.innerHTML = headerHTML;
  
  // 헤더 : 개인 메뉴
  const personalInfo = document.getElementById('personal-info');
  const personalMenu = document.getElementById('personal-menu');
  personalInfo.addEventListener('click',() => {
    personalInfo.classList.toggle('text-blue-500');
    personalMenu.classList.toggle('hidden');
  });

  // 웹 메뉴 버튼
  // const webMenuObj = document.getElementById('navigation');
  // const menuDetailObj = document.getElementById('menu-detail');
  // webMenuObj.addEventListener('click', () => {
  //   menuDetailObj.classList.toggle('hidden');
  // });
});