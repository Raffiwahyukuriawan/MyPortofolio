import { useEffect, useState } from "react";

interface Props {
  onDone: () => void;
}

const CSS = `
  @keyframes pl-scan { from{top:0} to{top:100%} }
  @keyframes pl-bar   { from{width:0} to{width:100%} }
  @keyframes pl-glitch-a {
    0%,89%,100%{opacity:0} 90%{opacity:.8;transform:translateX(-6px)} 91%{opacity:0}
  }
  @keyframes pl-glitch-b {
    0%,92%,100%{opacity:0} 93%{opacity:.6;transform:translateX(6px)} 94%{opacity:0}
  }
  @keyframes pl-count { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
  @keyframes pl-ring-a { from{transform:rotate(0deg) scale(1)} to{transform:rotate(360deg) scale(1.08)} }
  @keyframes pl-ring-b { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
  @keyframes pl-fade-out { from{opacity:1} to{opacity:0;pointer-events:none} }
  .pl-root {
    position:fixed; inset:0; z-index:99999;
    background:#050510; display:flex; align-items:center; justify-content:center;
    flex-direction:column; gap:0;
    transition: opacity .7s ease;
  }
  .pl-root.done { animation: pl-fade-out .7s ease forwards; }
  .pl-scan-line {
    position:absolute; left:0; right:0; height:2px; pointer-events:none;
    background:linear-gradient(90deg,transparent,rgba(168,85,247,.6),rgba(6,182,212,.6),transparent);
    animation:pl-scan 2.4s linear infinite; filter:blur(1px);
  }
  .pl-logo {
    position:relative; font-family:'Bricolage Grotesque',sans-serif; font-weight:800;
    font-size:clamp(3rem,10vw,6rem); text-transform:uppercase; letter-spacing:-.03em;
    color:#F0F0FF; line-height:1; margin-bottom:2.5rem; text-align:center;
  }
  .pl-logo::before {
    content:attr(data-text); position:absolute; inset:0; color:#06B6D4;
    animation:pl-glitch-a 5s infinite; clip-path:polygon(0 10%,100% 10%,100% 40%,0 40%);
    font-size:inherit; font-weight:inherit; line-height:inherit;
  }
  .pl-logo::after {
    content:attr(data-text); position:absolute; inset:0; color:#F43F5E;
    animation:pl-glitch-b 5s infinite; clip-path:polygon(0 60%,100% 60%,100% 85%,0 85%);
    font-size:inherit; font-weight:inherit; line-height:inherit;
  }
  .pl-ring-wrap { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; pointer-events:none; }
  .pl-ring {
    position:absolute; border-radius:50%; border:1px solid;
    box-sizing:border-box;
  }
  .pl-ring-a { width:160px;height:160px; border-color:rgba(168,85,247,.3); animation:pl-ring-a 8s linear infinite; }
  .pl-ring-b { width:220px;height:220px; border-color:rgba(6,182,212,.2); animation:pl-ring-b 12s linear infinite; }
  .pl-ring-c { width:300px;height:300px; border-color:rgba(244,63,94,.12); animation:pl-ring-a 18s linear infinite; }
  .pl-bar-wrap {
    width:min(360px,80vw); height:2px; background:rgba(255,255,255,.06); border-radius:99px; overflow:hidden;
    position:relative;
  }
  .pl-bar-fill {
    height:100%; border-radius:99px;
    background:linear-gradient(90deg,#7C3AED,#A855F7,#06B6D4);
    animation:pl-bar 5.2s cubic-bezier(.16,1,.3,1) forwards;
  }
  .pl-pct {
    font-family:'JetBrains Mono',monospace; font-size:.7rem; letter-spacing:.2em;
    color:rgba(168,85,247,.8); margin-top:1rem; animation:pl-count .3s ease;
  }
  .pl-sub {
    font-family:'JetBrains Mono',monospace; font-size:.65rem; letter-spacing:.3em;
    text-transform:uppercase; color:rgba(107,107,138,.7); margin-top:.6rem;
  }
`;

export function Preloader({ onDone }: Props) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const frames = [0, 8, 15, 27, 40, 55, 68, 80, 91, 100];
    let i = 0;
    const tick = () => {
      i++;
      if (i < frames.length) {
        setPct(frames[i]);
        setTimeout(tick, i < 6 ? 400 : 160);
      } else {
        setTimeout(() => setDone(true), 300);
        setTimeout(() => onDone(), 1000);
      }
    };
    const t = setTimeout(tick, 200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <>
      <style>{CSS}</style>
      <div className={`pl-root${done ? " done" : ""}`}>
        <div className="pl-scan-line" />
        <div className="pl-ring-wrap">
          <div className="pl-ring pl-ring-c" />
          <div className="pl-ring pl-ring-b" />
          <div className="pl-ring pl-ring-a" />
        </div>
        <div className="pl-logo" data-text="RWK">
          RWK
        </div>
        <div className="pl-bar-wrap">
          <div className="pl-bar-fill" />
        </div>
        <div className="pl-pct">{pct}%</div>
        <div className="pl-sub">Initializing Portfolio...</div>
      </div>
    </>
  );
}
