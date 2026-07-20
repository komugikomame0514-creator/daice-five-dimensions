
const tours = [
  {
    key:"bet", year:"2019", type:"ANNIVERSARY TOUR", title:"BET",
    accent:"#c89f57",
    poster:"radial-gradient(circle at 50% 38%,rgba(255,215,135,.32),transparent 20%),linear-gradient(145deg,#4b3820,#080705 65%)",
    detailPoster:"radial-gradient(circle at 20% 30%,rgba(255,215,140,.25),transparent 22%),linear-gradient(130deg,#5b4628,#15100a 52%,#020202)",
    subtitle:"5th Anniversary Tour",
    story:"積み重ねた時間を、自信と勝負強さへ変えたアニバーサリーツアー。",
    copy:"初期から続くライブの歩みを踏まえ、次のフェーズへ向かうDa-iCEの強さを象徴する公演。LIVE DVD / Blu-rayとしても公式に作品化されています。",
    scale:"ANNIVERSARY", period:"2018–2019", status:"ARCHIVE", media:"OFFICIAL DISC AVAILABLE",
    official:"https://da-ice.jp/discography/",
    phases:["OPENING","DANCE & VOCAL BLOCK","EMOTIONAL SECTION","ANNIVERSARY MOMENT","FINAL BLOCK"],
    moments:[
      ["CONCEPT","勝負を意味するタイトル","5周年を迎えたグループの覚悟を、音楽とステージで示す。"],
      ["ARCHIVE","映像作品として残る公演","現在のDa-iCEへつながる歴史を確認できる重要なライブ。"]
    ]
  },
  {
    key:"reversi", year:"2022", type:"ARENA TOUR", title:"REVERSi",
    accent:"#f1f1f1",
    poster:"conic-gradient(from 45deg,#f0f0f0,#171717,#ededed,#050505,#f0f0f0)",
    detailPoster:"linear-gradient(118deg,#ededed 0 24%,#111 25% 51%,#ddd 52% 67%,#030303 68%)",
    subtitle:"Da-iCE ARENA TOUR 2022",
    story:"白と黒、表と裏。相反する要素を反転させながら魅せるアリーナツアー。",
    copy:"『REVERSi』というコンセプトを軸に、Da-iCEの持つ多面性を大規模なステージへ展開。公式映像作品もリリースされています。",
    scale:"ARENA", period:"2022", status:"ARCHIVE", media:"OFFICIAL DISC AVAILABLE",
    official:"https://da-ice.jp/discography/",
    phases:["OPENING VISUAL","REVERSIBLE BLOCK","VOCAL FOCUS","PERFORMANCE SECTION","ENCORE"],
    moments:[
      ["VISUAL","反転を生かした世界観","モノクロームの緊張感とステージ演出が響き合う。"],
      ["PERFORMANCE","多面性を見せる構成","ボーカルとダンス、それぞれの強みを切り替えながら展開。"]
    ]
  },
  {
    key:"scene", year:"2023", type:"ARENA TOUR", title:"SCENE",
    accent:"#697aff",
    poster:"radial-gradient(circle at 68% 30%,rgba(120,145,255,.6),transparent 22%),linear-gradient(145deg,#161c46,#070819 63%)",
    detailPoster:"radial-gradient(circle at 75% 22%,rgba(124,150,255,.48),transparent 25%),linear-gradient(125deg,#18234f,#09091a 55%,#020202)",
    subtitle:"6 cities / 12 performances",
    story:"次の“SCENE”へ。映像・照明・楽曲の物語性をひとつに束ねたツアー。",
    copy:"公式発表では全国6都市12公演で開催。2013年の『PHASE』から続くライブツアーの流れを受け継ぎ、次の景色を提示した公演です。",
    scale:"6 CITIES", period:"2023", status:"ARCHIVE", media:"OFFICIAL DISC AVAILABLE",
    official:"https://da-ice.jp/news/detail.php?id=1103928",
    phases:["CONCEPT OPENING","SCENE I","SCENE II","TWIN VOCAL MOMENT","NEXT SCENE"],
    moments:[
      ["CONCEPT","“場面”が切り替わる演出","楽曲ごとに異なる景色を作り、一本の物語へつなげる。"],
      ["SCALE","全国6都市12公演","アリーナツアーとして各地へ世界観を届けた。"]
    ]
  },
  {
    key:"musiam", year:"2024", type:"10th ANNIVERSARY", title:"MUSi-aM",
    accent:"#dcaa28",
    poster:"radial-gradient(circle at 50% 42%,rgba(255,205,62,.35),transparent 18%),repeating-radial-gradient(circle at 50% 50%,#201805 0 10px,#080702 11px 22px)",
    detailPoster:"radial-gradient(circle at 50% 33%,rgba(255,203,44,.42),transparent 22%),linear-gradient(135deg,#4f3907,#100d04 58%,#020202)",
    subtitle:"10th Anniversary Arena Tour",
    story:"10年間の音楽を展示するように、過去と現在を行き来する“音楽の博物館”。",
    copy:"10周年という節目を冠したアリーナツアー。タイトルの響きが示すように、Da-iCEの音楽史を一つの空間で見せるような特別感を持つ公演です。",
    scale:"ANNIVERSARY", period:"2024", status:"ARCHIVE", media:"OFFICIAL TOUR",
    official:"https://shop.da-ice.jp/collections/da-ice-arena-tour-2026-terminal-goods",
    phases:["MUSEUM GATE","EARLY YEARS","BREAKTHROUGH ERA","10TH ANNIVERSARY","FUTURE GALLERY"],
    moments:[
      ["HISTORY","10年分の音楽を巡る","過去の楽曲と現在の表現が、同じステージで再接続する。"],
      ["ANNIVERSARY","ファンと共有する節目","長い時間を支えた人々と祝うための特別な空間。"]
    ]
  },
  {
    key:"entrance", year:"2025", type:"ARENA TOUR", title:"EntranCE",
    accent:"#29a8ff",
    poster:"linear-gradient(90deg,transparent 47%,rgba(40,173,255,.65) 48%,transparent 51%),linear-gradient(#050a14,#092e49 58%,#020305)",
    detailPoster:"linear-gradient(110deg,#031320,#0c4e75 55%,#020305)",
    subtitle:"4 cities / 8 performances",
    story:"Da-iCEを知った人が、さらに深く踏み込むための“入口”として構成されたツアー。",
    copy:"公式では4都市8公演で開催され、『CITRUS』『スターマイン』『I wonder』をきっかけに知った人へ、Da-iCEをより深く知ってもらうための“入口”と位置付けられています。",
    scale:"4 CITIES", period:"2025", status:"LATEST ARCHIVE", media:"LIVE DISC RELEASED",
    official:"https://da-ice.jp/",
    phases:["THE GATE","SIGNATURE SONGS","DEEPER SIDE","LIVE EXPERIENCE","WELCOME TO Da-iCE"],
    moments:[
      ["CONCEPT","新たなファンの入口","代表曲から入り、5人の多彩な魅力へ自然につながる構成。"],
      ["RELEASE","ファイナル公演を映像化","ツアー本編とドキュメンタリーを含む映像作品が公式発表された。"]
    ]
  },
  {
    key:"terminal", year:"2026", type:"ARENA TOUR", title:"TERMiNaL",
    accent:"#e6001a",
    poster:"radial-gradient(circle at 70% 30%,rgba(255,30,58,.38),transparent 20%),linear-gradient(135deg,#4b0010,#110005 60%,#020202)",
    detailPoster:"radial-gradient(circle at 25% 32%,rgba(255,34,63,.38),transparent 23%),linear-gradient(120deg,#570012,#170006 58%,#020202)",
    subtitle:"15th Anniversary / New Departure",
    story:"到着点ではなく、未来へ飛び立つための再出発点。15周年の幕開けを告げるツアー。",
    copy:"9thアルバム『TERMiNaL』は、積み重ねた経験を胸に次なるステージへ歩み出す“再出発点”という意味を持つと公式に説明されています。2026年のアリーナツアーも全国各地で開催。",
    scale:"ARENA", period:"2026", status:"CURRENT ERA", media:"OFFICIAL TOUR",
    official:"https://da-ice.jp/schedule/tour.php?id=1002859",
    phases:["DEPARTURE BOARD","NEW ALBUM WORLD","PAST × FUTURE","15TH ANNIVERSARY","NEXT DESTINATION"],
    moments:[
      ["THEME","終着点ではなく再出発点","これまでの経験と進化を携え、新しい未来へ向かう。"],
      ["TOUR","2026年アリーナツアー","福岡、宮城、新潟、東京、兵庫、神奈川、広島、愛知、北海道などで開催。"]
    ]
  }
];

const cards=[...document.querySelectorAll(".tour-card")];
const detail=document.getElementById("liveDetail");

function renderTour(key){
  const t=tours.find(x=>x.key===key)||tours[0];
  document.documentElement.style.setProperty("--live-accent",t.accent);
  detail.style.setProperty("--accent",t.accent);
  detail.style.setProperty("--detail-poster",t.detailPoster);
  detailType.textContent=t.type;
  detailTitle.textContent=t.title;
  detailSubtitle.textContent=t.subtitle;
  detailStory.textContent=t.story;
  detailCopy.textContent=t.copy;
  factScale.textContent=t.scale;
  factPeriod.textContent=t.period;
  factStatus.textContent=t.status;
  factMedia.textContent=t.media;
  officialTour.href=t.official;
  setlistFlow.innerHTML=t.phases.map((x,i)=>`<li><strong>${String(i+1).padStart(2,"0")} / ${x}</strong><span>構成イメージ — 正式セットリストは今後、確認済み情報のみ追加予定。</span></li>`).join("");
  momentsList.innerHTML=t.moments.map(m=>`<div class="moment"><small>${m[0]}</small><h5>${m[1]}</h5><p>${m[2]}</p></div>`).join("");
  cards.forEach(c=>c.classList.toggle("active",c.dataset.tour===key));
  detail.scrollIntoView({behavior:"smooth",block:"start"});
}
cards.forEach(card=>card.addEventListener("click",()=>renderTour(card.dataset.tour)));
renderTour("terminal");
