const footerHTML = `
<div class="mb-4">
  <p class="text-xs text-gray-400 p-8">chosajang.com. All rights reserved.</p>
</div>
<div class="fixed bottom-0 left-0">
  <!--// Project Exit : ST -->
  <div class="w-52 absolute bottom-0 bg-blue-500 text-center flex items-center justify-center h-14 cursor-pointer" onclick="location.href='/'">
      <span class="mr-2 text-white text-lg">프로젝트 나가기</span><img src="/p/admin/assets/images/exit-64.png" class="w-14"/>
  </div><!--// Project Exit : ED -->
</div>
`;

/**
 * DOM 트리 완성 후 실행
 */
document.addEventListener("DOMContentLoaded", function(){
  // 헤더 객체 
  let footerObj = document.getElementById('footer');
  // 헤더 class 삽입
  footerObj.classList.add('flex', 'flex-none', 'w-full', 'h-20', 'border-t', 'border-gray-200');
  // 헤더 HTML 삽입
  footerObj.innerHTML = footerHTML;
});