
const members = [
  {
    key:"taiki", no:"01", accent:"#e6001a",
    name:"工藤 大輝", en:"TAIKI KUDO", role:"PERFORMER / CREATOR",
    photo:"../assets/members-hq/taiki.jpg",
    catch:"音楽を選び、言葉を紡ぎ、Da-iCEの未来を設計する。",
    text:"グループ全体を俯瞰する鋭い視点と、深い音楽愛を持つクリエイター。ステージでは緻密な表現と自然体の存在感を両立し、作品づくりではDa-iCEの可能性を外へ広げていく。",
    core:"選曲・作詞・作曲・プロデュース",
    stage:"音を細部まで捉える知的なパフォーマンス",
    recommended:"制作視点と世界観が強く表れる楽曲"
  },
  {
    key:"toru", no:"02", accent:"#d8d0c8",
    name:"岩岡 徹", en:"TORU IWAOKA", role:"PERFORMER",
    photo:"../assets/members-hq/toru.jpg",
    catch:"静かな知性の奥に、誰より熱いステージへの意志を宿す。",
    text:"洗練された佇まいと、細部まで丁寧に作り込まれた表現が魅力。落ち着いた空気の中に遊び心を持ち、5人のバランスを整えながら、ステージでは確かな熱量を残す。",
    core:"知性・品格・安定感",
    stage:"繊細さと力強さを行き来する表現",
    recommended:"大人の色気が映えるダンスナンバー"
  },
  {
    key:"yudai", no:"03", accent:"#d5a649",
    name:"大野 雄大", en:"YUDAI OHNO", role:"VOCALIST",
    photo:"../assets/members-hq/yudai.jpg",
    catch:"温度のある声で、会場全体をひとつに包み込む。",
    text:"厚みと温かさを持つ歌声で、楽曲の土台と感情を支えるボーカリスト。ライブでは圧倒的な安定感と対応力を見せ、親しみやすい空気感も含めて会場を自然に動かしていく。",
    core:"歌唱力・包容力・ライブ対応力",
    stage:"会場を巻き込む力強く温かなボーカル",
    recommended:"声の深みをじっくり味わえるバラード"
  },
  {
    key:"sota", no:"04", accent:"#cf1830",
    name:"花村 想太", en:"SOTA HANAMURA", role:"VOCALIST / CREATOR",
    photo:"../assets/members-hq/sota.jpg",
    catch:"突き抜ける声で、楽曲の感情を限界まで解放する。",
    text:"高音域を自在に操る歌唱力と、物語を一気に立ち上げる表現力を持つボーカリスト。作詞・作曲でもグループの核を担い、鋭さと繊細さの両方でDa-iCEの音楽を前進させる。",
    core:"ハイトーン・作詞・作曲",
    stage:"一瞬で空気を変える爆発的な表現力",
    recommended:"ツインボーカルの頂点を味わえる楽曲"
  },
  {
    key:"hayate", no:"05", accent:"#7a9db9",
    name:"和田 颯", en:"HAYATE WADA", role:"PERFORMER",
    photo:"../assets/members-hq/hayate.jpg",
    catch:"一つひとつの音を、身体で見える形へ変えていく。",
    text:"スピード、精度、しなやかさを高い次元で併せ持つパフォーマー。派手さだけではなく、楽曲のニュアンスや空気まで踊りに落とし込み、Da-iCEのステージ全体を引き締める。",
    core:"ダンス・精度・身体表現",
    stage:"音の粒まで可視化する研ぎ澄まされた動き",
    recommended:"ダンスの細部まで見たくなる楽曲"
  }
];

let currentIndex = 0;
const selectors = [...document.querySelectorAll(".selector-card")];
const stage = document.getElementById("memberStage");

function renderMember(index){
  currentIndex = (index + members.length) % members.length;
  const m = members[currentIndex];

  stage.style.setProperty("--accent", m.accent);
  stagePhoto.src = m.photo;
  stagePhoto.alt = m.name;
  stageNumber.textContent = m.no;
  stageRole.textContent = m.role;
  stageCatch.textContent = m.catch;
  stageName.textContent = m.name;
  stageEn.textContent = m.en;
  stageText.textContent = m.text;
  stageCore.textContent = m.core;
  stagePerformance.textContent = m.stage;
  stageRecommended.textContent = m.recommended;

  selectors.forEach((card, i) => {
    card.classList.toggle("active", i === currentIndex);
    card.style.setProperty("--accent", members[i].accent);
  });
}

selectors.forEach((card, i) => {
  card.addEventListener("click", () => renderMember(i));
});

document.getElementById("stagePrev").addEventListener("click", () => renderMember(currentIndex - 1));
document.getElementById("stageNext").addEventListener("click", () => renderMember(currentIndex + 1));

document.addEventListener("keydown", e => {
  if(e.key === "ArrowLeft") renderMember(currentIndex - 1);
  if(e.key === "ArrowRight") renderMember(currentIndex + 1);
});

renderMember(0);
