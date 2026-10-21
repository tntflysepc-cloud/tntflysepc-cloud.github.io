(function(){
var D={
 en:[['회화 과정','여행 · 비즈니스 · 화상영어','/#/en','chat'],['자격증 과정','토익스피킹 · 오픽 · 아이엘츠','/en/toeic-speaking/','cert'],['내신 대비','국제학교 입학 · 적응','/en/intl-school/','school'],['수업 문의','무료 상담으로 수업 방식 확인','/#apply','ask']],
 jp:[['회화 과정','여행 · 비즈니스 · 일드 · 애니','/#/jp','chat'],['자격증 과정','JLPT · JPT · SJPT · 일본어 오픽','/jp/jlpt-n3/','cert'],['내신 대비','국제학교 입학 · 적응','/jp/intl-school/','school'],['수업 문의','무료 상담으로 수업 방식 확인','/#apply','ask']],
 cn:[['회화 과정','여행 · 비즈니스 · 중드','/#/cn','chat'],['자격증 과정','HSK · HSKK · TSC · 중국어 오픽','/cn/hsk-3/','cert'],['내신 대비','국제학교 입학 · 적응','/cn/intl-school/','school'],['수업 문의','무료 상담으로 수업 방식 확인','/#apply','ask']]
};
var I={
 chat:'<path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
 cert:'<circle cx="12" cy="9" r="5"/><path d="M9 13.5 8 21l4-2 4 2-1-7.5"/>',
 school:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>',
 ask:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z"/>'
};
function key(a){var h=a.getAttribute('href')||'';var m=h.match(/(?:^|\/)#?\/?(en|jp|cn)\/?$/);return m?m[1]:null}
function build(nav){
 [].slice.call(nav.querySelectorAll('a')).forEach(function(a){
  var k=key(a);if(!k||a.parentNode.classList.contains('dd'))return;
  var w=document.createElement('span');w.className='dd';a.parentNode.insertBefore(w,a);w.appendChild(a);
  var m=document.createElement('div');m.className='dd-menu';
  m.innerHTML=D[k].map(function(x){return '<a class="dd-i" href="'+x[2]+'"><span class="dd-ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+I[x[3]]+'</svg></span><span class="dd-t"><b>'+x[0]+'</b><small>'+x[1]+'</small></span></a>'}).join('');
  w.appendChild(m);
 });
}
function go(){[].forEach.call(document.querySelectorAll('header nav'),build)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
