const footerHTML = `
<div class="mb-4">
  <p class="text-xs text-gray-400 p-8">chosajang.com. All rights reserved.</p>
</div>`;

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