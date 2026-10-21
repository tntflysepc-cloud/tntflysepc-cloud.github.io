
(function(){
/* 연락처가 정해지면 아래 값만 채우면 플로팅 전화 버튼과 푸터 문의가 나타나요. 예) phone:'010-1234-5678', kakao:'https://pf.kakao.com/...' */
var C=window.TS_CONTACT||{phone:'',kakao:''};
function a(h,t){return '<a href="'+h+'">'+t+'</a>'}
function footer(){
 var f=document.querySelector('footer');if(!f)return;
 var tel=C.phone?C.phone.replace(/[^0-9+]/g,''):'';
 var contact=[];if(C.phone)contact.push('문의 <b><a href="tel:'+tel+'">'+C.phone+'</a></b>');if(C.kakao)contact.push('<a href="'+C.kakao+'" target="_blank" rel="noopener">카카오톡 상담</a>');
 f.className='sf';
 f.innerHTML='<div class="wrap"><div class="sf-brand"><span class="sf-logo"></span><b>트리플 스피크</b><span>얼굴 보며 말하는 1:1 화상 회화</span></div>'+
 '<div class="sf-nav">'+a('/','홈')+a('/#/en','영어')+a('/#/jp','일본어')+a('/#/cn','중국어')+a('/magazine/','매거진')+a('/reviews/','수업후기')+a('/#apply','상담 신청')+'</div>'+
 '<div class="sf-h">인기 과정</div><div class="sf-links">'+a('/en/toeic-speaking/','토익스피킹')+a('/en/opic-ih/','오픽(OPIc)')+a('/en/phone/','전화영어')+a('/jp/jlpt-n3/','JLPT 일본어')+a('/cn/hsk-3/','HSK 중국어')+a('/cn/hskk-basic/','HSKK')+'</div>'+
 '<div class="sf-h">함께 보면 좋은 곳</div><div class="sf-links">'+a('/magazine/#en','영어 학습 글')+a('/magazine/#jp','일본어 학습 글')+a('/magazine/#cn','중국어 학습 글')+a('/reviews/','수강생 후기')+'</div>'+
 (contact.length?'<div class="sf-line">'+contact.join(' · ')+'</div>':'')+
 '<div class="sf-copy">© 2026 트리플 스피크 · 1:1 화상 영어·일본어·중국어 회화</div></div>';
}
function fab(){
 if(document.querySelector('.fab'))return;
 var d=document.createElement('div');d.className='fab';
 var tel=C.phone?C.phone.replace(/[^0-9+]/g,''):'';
 d.innerHTML=(C.kakao?'<a class="fab-k" href="'+C.kakao+'" target="_blank" rel="noopener" aria-label="카카오톡 상담"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.9 5.2 4.7 6.6L5.6 21l4.1-2.3c.7.1 1.5.2 2.3.2 5.5 0 10-3.5 10-7.8S17.5 3 12 3z"/></svg></a>':'<a class="fab-k" href="/#apply" aria-label="상담 신청"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.9 5.2 4.7 6.6L5.6 21l4.1-2.3c.7.1 1.5.2 2.3.2 5.5 0 10-3.5 10-7.8S17.5 3 12 3z"/></svg></a>')+
 (C.phone?'<a class="fab-p" href="tel:'+tel+'" aria-label="전화하기"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2z"/></svg></a>':'');
 document.body.appendChild(d);
}
function go(){footer();fab()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
