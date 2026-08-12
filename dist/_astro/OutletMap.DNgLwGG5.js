const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/leaflet-src.CwoILlCy.js","_astro/rolldown-runtime.B0Z9INg1.js","_astro/leaflet.CHtXxHHg.css","_astro/leaflet.markercluster-src.DzAysbMe.js","_astro/MarkerCluster.CKGHnt6k.css","_astro/MarkerCluster.DDDuPr8f.css"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime.B0Z9INg1.js";import{t}from"./jsx-runtime.D59aNJmm.js";import{t as n}from"./react.BL_zIdUG.js";import{t as r}from"./react.B7TNR91e.js";import{t as i}from"./AnimatePresence.BaUTPGox.js";import{n as a,t as o}from"./search.DRI9Fw8l.js";import{t as s}from"./map-pin.DIX7Y7Mv.js";import{t as c}from"./star.Da7z5SJB.js";import{t as l}from"./x.CSzUWx68.js";import{t as u}from"./preload-helper.CxFQXtKk.js";var d=e(n()),f=t();function p({outlet:e,onClose:t}){return(0,d.useEffect)(()=>{let e=e=>{e.key===`Escape`&&t()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[t]),(0,f.jsxs)(r.div,{initial:{opacity:0,y:16,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:12,scale:.97},transition:{duration:.28,ease:[.16,1,.3,1]},className:`absolute bottom-6 left-1/2 -translate-x-1/2 z-[1000]\r
                 w-[340px] max-w-[calc(100%-24px)]\r
                 bg-white rounded-3xl\r
                 shadow-[0_24px_64px_rgba(0,0,0,0.18)]\r
                 overflow-hidden`,role:`dialog`,"aria-label":`Detail outlet ${e.name}`,children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between px-5 pt-5 pb-3`,children:[(0,f.jsx)(`h3`,{className:`font-heading font-bold text-[#111111] text-base leading-snug`,style:{fontFamily:`var(--font-heading)`},children:e.name}),(0,f.jsx)(`button`,{onClick:t,className:`w-8 h-8 rounded-full bg-black/[0.06] flex items-center justify-center\r
                     text-[#111111]/50 hover:bg-black/10 transition-colors shrink-0`,"aria-label":`Tutup`,children:(0,f.jsx)(l,{className:`w-4 h-4`})})]}),(0,f.jsxs)(`div`,{className:`px-5 pb-5`,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-1 mb-3`,children:[(0,f.jsx)(c,{className:`w-3.5 h-3.5 fill-[#FFC500] text-[#FFC500]`}),(0,f.jsx)(`span`,{className:`text-xs font-semibold text-[#111111]`,children:e.rating}),(0,f.jsxs)(`span`,{className:`text-xs text-[#111111]/40`,children:[`(`,e.reviewCount,`)`]})]}),(0,f.jsxs)(`div`,{className:`flex items-start gap-2 mb-2`,children:[(0,f.jsx)(s,{className:`w-3.5 h-3.5 text-[#6E1A10] mt-0.5 shrink-0`}),(0,f.jsx)(`p`,{className:`text-xs text-[#111111]/60 leading-relaxed`,children:e.address})]}),(0,f.jsxs)(`div`,{className:`flex items-center gap-2 mb-5`,children:[(0,f.jsx)(a,{className:`w-3.5 h-3.5 text-[#6E1A10] shrink-0`}),(0,f.jsx)(`p`,{className:`text-xs text-[#111111]/60`,children:e.openingHours})]}),(0,f.jsxs)(`div`,{className:`flex gap-3`,children:[(0,f.jsxs)(`a`,{href:e.googleMapsUrl,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Buka lokasi ${e.name} di Google Maps`,className:`inline-flex items-center justify-center gap-2\r
                       h-[52px] rounded-full\r
                       border-[1.5px] border-[#6E1A10]\r
                       bg-white text-[#6E1A10]\r
                       text-[15px] font-semibold\r
                       hover:bg-[#FFF7F2]\r
                       active:scale-[0.98]\r
                       transition-all duration-200 ease-out\r
                       cursor-pointer focus-visible:outline-none\r
                       focus-visible:ring-2 focus-visible:ring-[#6E1A10]/40`,style:{width:`42%`},children:[(0,f.jsx)(s,{className:`w-4 h-4 shrink-0`}),`View Maps`]}),(0,f.jsx)(`a`,{href:e.orderUrl,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Pesan sekarang dari ${e.name}`,className:`inline-flex items-center justify-center\r
                       h-[52px] rounded-full\r
                       bg-[#FE7108] text-white\r
                       text-[15px] font-semibold\r
                       hover:bg-[#E86300]\r
                       active:scale-[0.98]\r
                       shadow-sm\r
                       transition-all duration-200 ease-out\r
                       cursor-pointer focus-visible:outline-none\r
                       focus-visible:ring-2 focus-visible:ring-[#FE7108]/40`,style:{width:`58%`},children:`Pesan Sekarang`})]})]})]},e.id)}function m({outlets:e,onSelect:t}){let[n,a]=(0,d.useState)(``),[s,c]=(0,d.useState)(!1),u=(0,d.useRef)(null),p=(0,d.useMemo)(()=>{if(!n.trim())return[];let t=n.toLowerCase().slice(0,100);return e.filter(e=>e.name.toLowerCase().includes(t)||e.city.toLowerCase().includes(t)||e.district.toLowerCase().includes(t)||e.address.toLowerCase().includes(t))},[n,e]);return(0,d.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&c(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,f.jsxs)(`div`,{ref:u,className:`absolute top-4 left-1/2 -translate-x-1/2 z-[1000] w-[340px] max-w-[calc(100%-32px)]`,children:[(0,f.jsxs)(`div`,{className:`relative`,children:[(0,f.jsx)(o,{className:`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#111111]/40 pointer-events-none`}),(0,f.jsx)(`input`,{type:`text`,maxLength:100,value:n,onChange:e=>{a(e.target.value),c(!0)},onFocus:()=>c(!0),placeholder:`Cari outlet terdekat...`,className:`w-full pl-10 pr-4 py-3 rounded-2xl\r
                     bg-white/95 backdrop-blur-md\r
                     border border-white/60\r
                     shadow-[0_8px_32px_rgba(0,0,0,0.12)]\r
                     text-sm text-[#111111] placeholder-[#111111]/40\r
                     focus:outline-none focus:ring-2 focus:ring-[#6E1A10]/20\r
                     transition-all`,"aria-label":`Cari outlet`,"aria-expanded":s&&p.length>0,role:`combobox`,"aria-autocomplete":`list`}),n&&(0,f.jsx)(`button`,{onClick:()=>{a(``),c(!1)},className:`absolute right-3 top-1/2 -translate-y-1/2 text-[#111111]/30 hover:text-[#111111]/60 transition-colors`,"aria-label":`Hapus pencarian`,children:(0,f.jsx)(l,{className:`w-4 h-4`})})]}),(0,f.jsx)(i,{children:s&&p.length>0&&(0,f.jsx)(r.ul,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.18},className:`mt-2 bg-white/95 backdrop-blur-md rounded-2xl\r
                       shadow-[0_8px_32px_rgba(0,0,0,0.12)]\r
                       border border-white/60 overflow-hidden`,role:`listbox`,children:p.map(e=>(0,f.jsx)(`li`,{role:`option`,"aria-selected":!1,children:(0,f.jsxs)(`button`,{onClick:()=>{t(e),a(e.name),c(!1)},className:`w-full text-left px-4 py-3 hover:bg-[#FAF7F2]\r
                             transition-colors border-b border-gray-100 last:border-0`,children:[(0,f.jsx)(`p`,{className:`text-sm font-semibold text-[#111111]`,children:e.name}),(0,f.jsxs)(`p`,{className:`text-xs text-[#111111]/50 mt-0.5`,children:[e.district,`, `,e.city]})]})},e.id))})})]})}function h({outlets:t}){let n=(0,d.useRef)(null),r=(0,d.useRef)(null),a=(0,d.useRef)(new Map),o=(0,d.useRef)(null),[s,c]=(0,d.useState)(null),[l,h]=(0,d.useState)(!1),g=(0,d.useCallback)(e=>{if(c(e),r.current){r.current.flyTo([e.latitude,e.longitude],15,{animate:!0,duration:1.2});let t=a.current.get(e.id);if(t){t.setZIndexOffset(1e3);let e=t.getElement();e&&(e.classList.add(`marker-bounce`),setTimeout(()=>e.classList.remove(`marker-bounce`),600))}}},[]);return(0,d.useEffect)(()=>{if(!n.current||r.current)return;let i,s;return(async()=>{let l=(await u(async()=>{let{default:t}=await import(`./leaflet-src.CwoILlCy.js`).then(t=>e(t.default));return{default:t}},__vite__mapDeps([0,1]))).default;if(await u(()=>Promise.resolve({}),__vite__mapDeps([2])),await u(()=>import(`./leaflet.markercluster-src.DzAysbMe.js`).then(t=>e(t.default)),__vite__mapDeps([3,1])),await u(()=>Promise.resolve({}),__vite__mapDeps([4])),await u(()=>Promise.resolve({}),__vite__mapDeps([5])),!n.current)return;i=l.map(n.current,{center:[-6.45,106.85],zoom:10,zoomControl:!1,scrollWheelZoom:!0,inertia:!0,inertiaDeceleration:3e3}),r.current=i,l.tileLayer(`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`,{attribution:`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>`,subdomains:`abcd`,maxZoom:19}).addTo(i),l.control.zoom({position:`bottomright`}).addTo(i);let d=(e=!1)=>l.divIcon({className:``,html:`
            <div class="ss-marker ${e?`ss-marker--active`:``}">
              <div class="ss-marker__pin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white"/>
                </svg>
              </div>
              <div class="ss-marker__dot"></div>
            </div>
          `,iconSize:[36,42],iconAnchor:[18,42]});s=l.markerClusterGroup({maxClusterRadius:60,showCoverageOnHover:!1,iconCreateFunction:e=>{let t=e.getChildCount();return l.divIcon({html:`<div class="ss-cluster"><span>${t}</span></div>`,className:``,iconSize:[44,44],iconAnchor:[22,22]})},animate:!0,animateAddingMarkers:!0}),o.current=s,t.forEach((e,t)=>{setTimeout(()=>{let t=l.marker([e.latitude,e.longitude],{icon:d(!1),title:e.name,alt:e.name,riseOnHover:!0});t.on(`click`,()=>{a.current.forEach((e,t)=>{let n=e.getElement();n&&n.classList.remove(`ss-marker--active`)});let n=t.getElement();n&&n.querySelector(`.ss-marker`)?.classList.add(`ss-marker--active`),g(e)}),a.current.set(e.id,t),s.addLayer(t)},t*80)}),i.addLayer(s),i.on(`click`,()=>c(null)),h(!0)})(),()=>{i&&i.remove(),r.current=null}},[]),(0,f.jsxs)(`div`,{className:`relative w-full h-full`,role:`region`,"aria-label":`Peta lokasi outlet`,children:[(0,f.jsx)(m,{outlets:t,onSelect:g}),(0,f.jsx)(`div`,{ref:n,className:`w-full h-full`,"aria-label":`Leaflet map`}),!l&&(0,f.jsx)(`div`,{className:`absolute inset-0 bg-[#e8e3dc] animate-pulse rounded-[24px] flex items-center justify-center`,children:(0,f.jsx)(`div`,{className:`text-[#6E1A10]/40 text-sm font-medium`,children:`Memuat peta...`})}),(0,f.jsx)(i,{children:s&&(0,f.jsx)(p,{outlet:s,onClose:()=>c(null)})}),(0,f.jsx)(`style`,{children:`
        .ss-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.34,1.56,0.64,1);
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.20));
        }
        .ss-marker:hover {
          transform: scale(1.18);
          filter: drop-shadow(0 8px 16px rgba(110,26,16,0.35));
        }
        .ss-marker__pin {
          width: 36px;
          height: 36px;
          background: #6E1A10;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2.5px solid white;
          transition: background 0.2s;
        }
        .ss-marker__pin svg {
          transform: rotate(45deg);
        }
        .ss-marker--active .ss-marker__pin {
          background: #FE7108;
        }
        .ss-marker__dot {
          width: 6px;
          height: 6px;
          background: #6E1A10;
          border-radius: 50%;
          margin-top: 2px;
          transition: background 0.2s;
        }
        .ss-marker--active .ss-marker__dot {
          background: #FE7108;
        }
        @keyframes markerBounce {
          0%,100% { transform: scale(1); }
          30% { transform: scale(1.3) translateY(-6px); }
          60% { transform: scale(0.95); }
        }
        .marker-bounce .ss-marker {
          animation: markerBounce 0.55s cubic-bezier(0.36,0.07,0.19,0.97);
        }
        /* Cluster */
        .ss-cluster {
          width: 44px;
          height: 44px;
          background: #6E1A10;
          border: 2.5px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 13px;
          box-shadow: 0 4px 12px rgba(110,26,16,0.35);
          transition: transform 0.2s;
          cursor: pointer;
        }
        .ss-cluster:hover {
          transform: scale(1.12);
        }
        /* Override Leaflet default */
        .leaflet-container {
          font-family: inherit;
          background: #f0ebe3;
        }
        .leaflet-control-zoom a {
          border-radius: 8px !important;
          font-size: 16px;
        }
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.10) !important;
        }
        .leaflet-control-attribution {
          font-size: 10px;
          opacity: 0.5;
        }
      `})]})}export{h as default};