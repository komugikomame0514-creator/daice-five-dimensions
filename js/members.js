
const memberOrder=["taiki","toru","yudai","sota","hayate"];
const members={
  taiki:{no:"01",photo:"assets/members/taiki.jpg",role:"PERFORMER / CREATOR",name:"工藤 大輝",en:"TAIKI KUDO",catch:"音楽を選び、言葉を紡ぎ、Da-iCEの未来を設計する。",text:"グループ全体を俯瞰する鋭い視点と、深い音楽愛を持つクリエイター。ステージでは緻密な表現と自然体の存在感を両立し、作品づくりではDa-iCEの可能性を外へ広げていく。",core:"選曲・作詞・作曲・プロデュース",stage:"音を細部まで捉える知的なパフォーマンス",song:"工藤大輝の制作視点が光る楽曲"},
  toru:{no:"02",photo:"assets/members/toru.jpg",role:"PERFORMER",name:"岩岡 徹",en:"TORU IWAOKA",catch:"静かな知性の奥に、誰より熱いステージへの意志を宿す。",text:"洗練された佇まいと、細部まで丁寧に作り込まれた表現が魅力。落ち着いた空気の中に遊び心を持ち、5人のバランスを整えながら、ステージでは確かな熱量を残す。",core:"知性・品格・安定感",stage:"繊細さと力強さを行き来する表現",song:"大人の色気が映えるダンスナンバー"},
  yudai:{no:"03",photo:"assets/members/yudai.jpg",role:"VOCALIST",name:"大野 雄大",en:"YUDAI OHNO",catch:"温度のある声で、会場全体をひとつに包み込む。",text:"厚みと温かさを持つ歌声で、楽曲の土台と感情を支えるボーカリスト。ライブでは圧倒的な安定感と対応力を見せ、親しみやすい人柄も含めて会場の空気を自然に動かしていく。",core:"歌唱力・包容力・ライブ対応力",stage:"会場を巻き込む力強く温かなボーカル",song:"声の深みを味わえるバラード"},
  sota:{no:"04",photo:"assets/members/sota.jpg",role:"VOCALIST / CREATOR",name:"花村 想太",en:"SOTA HANAMURA",catch:"突き抜ける声で、楽曲の感情を限界まで解放する。",text:"高音域を自在に操る歌唱力と、物語を一気に立ち上げる表現力を持つボーカリスト。作詞・作曲でもグループの核を担い、鋭さと繊細さの両方でDa-iCEの音楽を前進させる。",core:"ハイトーン・作詞・作曲",stage:"一瞬で空気を変える爆発的な表現力",song:"ツインボーカルの頂点を味わえる楽曲"},
  hayate:{no:"05",photo:"assets/members/hayate.jpg",role:"PERFORMER",name:"和田 颯",en:"HAYATE WADA",catch:"一つひとつの音を、身体で見える形へ変えていく。",text:"スピード、精度、しなやかさを高い次元で併せ持つパフォーマー。派手さだけではなく、楽曲のニュアンスや空気まで踊りに落とし込み、Da-iCEのステージ全体を引き締める。",core:"ダンス・精度・身体表現",stage:"音の粒まで可視化する研ぎ澄まされた動き",song:"ダンスの細部まで見たくなる楽曲"}
};
const modal=document.getElementById("memberModal");
let currentMember="taiki";
function renderMember(key){
  const m=members[key]; currentMember=key;
  modalPhoto.src=m.photo; modalPhoto.alt=m.name; modalNumber.textContent=m.no;
  modalRole.textContent=m.role; modalCatch.textContent=m.catch;
  modalName.textContent=m.name; modalEn.textContent=m.en;
  modalText.textContent=m.text; modalCore.textContent=m.core;
  modalStage.textContent=m.stage; modalSong.textContent=m.song;
}
document.querySelectorAll(".member-card").forEach(card=>card.addEventListener("click",()=>{
  renderMember(card.dataset.member); modal.classList.add("open");
  modal.setAttribute("aria-hidden","false"); document.body.classList.add("lock");
}));
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("lock")}
memberPrev?.addEventListener("click",()=>{const i=memberOrder.indexOf(currentMember);renderMember(memberOrder[(i-1+memberOrder.length)%memberOrder.length])});
memberNext?.addEventListener("click",()=>{const i=memberOrder.indexOf(currentMember);renderMember(memberOrder[(i+1)%memberOrder.length])});
modalClose?.addEventListener("click",closeModal);
modal?.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")closeModal();
  if(modal?.classList.contains("open")&&e.key==="ArrowLeft")memberPrev.click();
  if(modal?.classList.contains("open")&&e.key==="ArrowRight")memberNext.click();
});
