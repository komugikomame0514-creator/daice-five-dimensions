
(() => {
  const stops = window.TERMINAL_STOPS || [];
  if (!stops.length) return;

  const shell = document.getElementById("terminalMapShell");
  const svg = document.getElementById("terminalMapSvg");
  const stopLayer = document.getElementById("mapStops");
  const route = document.getElementById("mapRoute");
  const routeShadow = document.getElementById("mapRouteShadow");
  const flight = document.getElementById("routeFlight");

  const ui = {
    number: document.getElementById("mapStopNumber"),
    city: document.getElementById("mapCity"),
    region: document.getElementById("mapRegion"),
    venue: document.getElementById("mapVenue"),
    date: document.getElementById("mapDate"),
    tag: document.getElementById("mapTag"),
    shows: document.getElementById("mapShows"),
    index: document.getElementById("mapRouteIndex"),
    progress: document.getElementById("mapProgressFill"),
    prev: document.getElementById("mapPrev"),
    next: document.getElementById("mapNext"),
    autoplay: document.getElementById("mapAutoplay")
  };

  // Calibrated longitude/latitude projection for the stylized Japan silhouette.
  const project = ({lon, lat}) => {
    const minLon = 129.2, maxLon = 145.8;
    const minLat = 30.3, maxLat = 45.8;
    const x = 70 + ((lon - minLon) / (maxLon - minLon)) * 610;
    const y = 835 - ((lat - minLat) / (maxLat - minLat)) * 710;
    return {x, y};
  };

  const points = stops.map(project);
  const ns = "http://www.w3.org/2000/svg";
  let activeIndex = 0;
  let timer = null;

  function routePath(points){
    if (!points.length) return "";
    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    for (let i=1;i<points.length;i++){
      const a = points[i-1], b = points[i];
      const mx = (a.x+b.x)/2;
      const my = (a.y+b.y)/2 - Math.min(38, Math.abs(b.x-a.x)*.12);
      d += ` Q ${mx.toFixed(1)} ${my.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
    }
    return d;
  }

  const pathD = routePath(points);
  route.setAttribute("d", pathD);
  routeShadow.setAttribute("d", pathD);

  stops.forEach((stop, index) => {
    const p = points[index];
    const g = document.createElementNS(ns,"g");
    g.classList.add("map-stop");
    g.setAttribute("transform",`translate(${p.x} ${p.y})`);
    g.setAttribute("tabindex","0");
    g.setAttribute("role","button");
    g.setAttribute("aria-label",`${stop.order}番目 ${stop.city} ${stop.venue}`);

    const pulse = document.createElementNS(ns,"circle");
    pulse.setAttribute("r","17");
    pulse.classList.add("stop-pulse");

    const ring = document.createElementNS(ns,"circle");
    ring.setAttribute("r","13");
    ring.classList.add("stop-ring");

    const core = document.createElementNS(ns,"circle");
    core.setAttribute("r","4");
    core.classList.add("stop-core");

    const num = document.createElementNS(ns,"text");
    num.setAttribute("y","4");
    num.classList.add("stop-index");
    num.textContent = String(stop.order).padStart(2,"0");

    const label = document.createElementNS(ns,"text");
    const rightSide = p.x < 470;
    label.setAttribute("x", rightSide ? "19" : "-19");
    label.setAttribute("y","-16");
    label.setAttribute("text-anchor", rightSide ? "start" : "end");
    label.classList.add("map-city-label");
    label.textContent = stop.city;

    g.append(pulse,ring,core,num,label);
    g.addEventListener("click",()=>selectStop(index));
    g.addEventListener("keydown",e=>{
      if(e.key==="Enter" || e.key===" "){e.preventDefault();selectStop(index)}
    });
    stopLayer.appendChild(g);
  });

  const stopNodes = [...stopLayer.querySelectorAll(".map-stop")];

  function updateFlight(index){
    const p = points[index];
    flight.setAttribute("cx",p.x);
    flight.setAttribute("cy",p.y);
  }

  function selectStop(index, fromAutoplay=false){
    activeIndex = (index + stops.length) % stops.length;
    const stop = stops[activeIndex];

    ui.number.textContent = stop.order;
    ui.city.textContent = stop.city;
    ui.region.textContent = stop.region;
    ui.venue.textContent = stop.venue;
    ui.date.textContent = stop.date;
    ui.tag.textContent = stop.tag;
    ui.shows.textContent = stop.shows;
    ui.index.textContent = `${String(stop.order).padStart(2,"0")} / ${String(stops.length).padStart(2,"0")}`;
    ui.progress.style.width = `${(stop.order/stops.length)*100}%`;

    stopNodes.forEach((node,i)=>{
      node.classList.toggle("active",i===activeIndex);
      const label=node.querySelector(".map-city-label");
      if(label) label.classList.toggle("active",i===activeIndex);
    });

    updateFlight(activeIndex);
    if(!fromAutoplay && timer) stopAutoplay();
  }

  function startRouteAnimation(){
    shell.classList.remove("route-ready");
    void shell.offsetWidth;
    shell.classList.add("route-ready");
  }

  function startAutoplay(){
    if(timer) return;
    ui.autoplay.classList.add("playing");
    ui.autoplay.textContent = "PAUSE TOUR ROUTE";
    startRouteAnimation();
    let i=0;
    selectStop(0,true);
    timer=setInterval(()=>{
      i++;
      if(i>=stops.length){
        stopAutoplay();
        return;
      }
      selectStop(i,true);
    },650);
  }

  function stopAutoplay(){
    clearInterval(timer);
    timer=null;
    ui.autoplay.classList.remove("playing");
    ui.autoplay.textContent="PLAY THE TOUR ROUTE";
  }

  ui.prev.addEventListener("click",()=>selectStop(activeIndex-1));
  ui.next.addEventListener("click",()=>selectStop(activeIndex+1));
  ui.autoplay.addEventListener("click",()=>timer?stopAutoplay():startAutoplay());

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        startRouteAnimation();
        observer.disconnect();
      }
    });
  },{threshold:.28});
  observer.observe(shell);

  selectStop(0,true);
})();
