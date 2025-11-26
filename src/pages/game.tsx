import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import StickyEmergencyWidget from "../components/StickyEmergencyWidget";
import { level1, loadProgress, saveProgress } from "../game/levels";
import { hasPath, rotate, updateTile } from "../game/engine";
import type { Coord, LevelConfig } from "../game/types";

type View = "start" | "levels" | "playing" | "won";

export default function GamePage() {
  const [view, setView] = useState<View>("start");
  const [progress, setProgress] = useState(loadProgress());
  const [current, setCurrent] = useState<LevelConfig | null>(null);
  const [message, setMessage] = useState<string>("");

  const startLevel1 = () => {
    const lvl = level1();
    setCurrent(lvl);
    setView("playing");
    setMessage("");
  };

  const unlockNext = (id: number) => {
    if (!progress.unlocked.includes(id + 1)) {
      const next = { unlocked: [...progress.unlocked, id + 1] };
      setProgress(next);
      saveProgress(next);
    }
  };

  const rotateAt = (coord: Coord) => {
    if (!current) return;
    const updated = updateTile(current, coord, (t) => rotate(t));
    setCurrent(updated);
  };

  const checkPath = () => {
    if (!current) return;
    if (hasPath(current)) {
      setView("won");
      unlockNext(current.id);
      setMessage("Level complete! Great job connecting the line.");
    } else {
      setMessage("No complete path yet. Keep rotating tiles.");
    }
  };

  return (
    <Layout>
      <SEO title="Emergency Pipe Link" description="Rotate pipes to connect the line." />
      <div className="mx-auto w-full max-w-5xl px-6 py-10 lg:px-10">
        {view === "start" && <StartScreen onStart={startLevel1} onLevels={() => setView("levels")} />}
        {view === "levels" && (
          <LevelSelect progress={progress} onBack={() => setView("start")} onPlayLevel1={startLevel1} />
        )}
        {view === "playing" && current && (
          <LevelView level={current} onRotate={rotateAt} onCheck={checkPath} message={message} onBack={() => setView("levels")} />
        )}
        {view === "won" && (
          <WinScreen onReplay={() => setView("playing")} onLevels={() => setView("levels")} />
        )}
      </div>
      <StickyEmergencyWidget />
    </Layout>
  );
}

function StartScreen({ onStart, onLevels }: { onStart: () => void; onLevels: () => void }) {
  return (
    <section className="rounded-3xl border border-gold/40 bg-white/90 p-8 shadow-2xl shadow-navy/10 backdrop-blur">
      <h1 className="font-heading text-3xl text-navy">Emergency Pipe Link</h1>
      <p className="mt-2 text-slate">Connect the water main to the destination before pressure builds.</p>
      <div className="mt-6 flex gap-4">
        <button className="btn-primary" onClick={onStart}>Start</button>
        <button className="btn-secondary" onClick={onLevels}>Level Select</button>
      </div>
    </section>
  );
}

function LevelSelect({ progress, onBack, onPlayLevel1 }: { progress: { unlocked: number[] }; onBack: () => void; onPlayLevel1: () => void }) {
  const unlocked = useMemo(() => new Set(progress.unlocked), [progress]);
  return (
    <section className="rounded-3xl border border-gold/40 bg-white/90 p-8 shadow-2xl shadow-navy/10 backdrop-blur">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl text-navy">Select Level</h2>
        <button className="btn-secondary" onClick={onBack}>Back</button>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <LevelCard label="Level 1" unlocked={unlocked.has(1)} onClick={onPlayLevel1} />
        <LevelCard label="Level 2" unlocked={unlocked.has(2)} />
        <LevelCard label="Level 3" unlocked={unlocked.has(3)} />
      </div>
      <p className="mt-4 text-xs text-slate">Unlocks are saved to your device.</p>
    </section>
  );
}

function LevelCard({ label, unlocked, onClick }: { label: string; unlocked: boolean; onClick?: () => void }) {
  return (
    <button
      className={`group flex h-28 w-full items-center justify-center rounded-2xl border px-4 transition ${unlocked ? "border-gold/60 bg-cream hover:bg-gold/20" : "border-slate/30 bg-slate/10 opacity-60"}`}
      disabled={!unlocked}
      onClick={onClick}
    >
      <span className="font-heading text-lg text-navy group-disabled:text-slate">{label}</span>
      {!unlocked && <span className="ml-2 text-xs text-slate">(Locked)</span>}
    </button>
  );
}

function LevelView({ level, onRotate, onCheck, message, onBack }: { level: LevelConfig; onRotate: (c: Coord) => void; onCheck: () => void; message: string; onBack: () => void }) {
  const { size, grid, source, dest } = level;
  return (
    <section className="rounded-3xl border border-gold/40 bg-white/90 p-6 shadow-2xl shadow-navy/10 backdrop-blur">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-heading text-2xl text-navy">Level 1 — Make the Connection</h2>
        <button className="btn-secondary" onClick={onBack}>Back</button>
      </div>
      <p className="text-sm text-slate">Tap tiles to rotate. Connect from Source to Destination.</p>
      <div className={`mt-4 grid gap-2`} style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
        {grid.map((tile, idx) => {
          const r = Math.floor(idx / size);
          const c = idx % size;
          const isSource = r === source.r && c === source.c;
          const isDest = r === dest.r && c === dest.c;
          return (
            <button
              key={idx}
              onClick={() => onRotate({ r, c })}
              className="relative aspect-square rounded-xl border border-cream bg-cream p-2 shadow-inner shadow-navy/10"
            >
              <TileSVG type={tile.type} rotation={tile.rotation} />
              {isSource && <span className="absolute left-1 top-1 rounded bg-gold px-2 py-1 text-[10px] font-semibold text-navy">S</span>}
              {isDest && <span className="absolute right-1 bottom-1 rounded bg-gold px-2 py-1 text-[10px] font-semibold text-navy">D</span>}
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex items-center gap-4">
        <button className="btn-primary" onClick={onCheck}>Check Connection</button>
        {message && <p className="text-sm text-slate">{message}</p>}
      </div>
    </section>
  );
}

function WinScreen({ onReplay, onLevels }: { onReplay: () => void; onLevels: () => void }) {
  return (
    <section className="rounded-3xl border border-success/40 bg-cream p-8 shadow-2xl shadow-success/20">
      <h2 className="font-heading text-2xl text-success">Level Complete</h2>
      <p className="mt-2 text-slate">Need help now? Call our 24/7 emergency line or request a commercial quote.</p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a href="tel:+13125550125" className="btn-primary">Emergency Service 24/7</a>
        <a href="#contact" className="btn-secondary">Commercial Quote</a>
        <button className="btn-secondary" onClick={onReplay}>Replay</button>
        <button className="btn-secondary" onClick={onLevels}>Level Select</button>
      </div>
    </section>
  );
}

function TileSVG({ type, rotation }: { type: LevelConfig["grid"][number]["type"]; rotation: number }) {
  const rot = rotation % 4;
  // Render minimal pipes as thick strokes to sides; rotate as needed
  const base = (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <circle cx="50" cy="50" r="8" fill="#C89B3C" />
      {/* lines are drawn relative to rotation-specific sets */}
      {type === "I" && (
        rot % 2 === 0 ? (
          <line x1="50" y1="0" x2="50" y2="100" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
        ) : (
          <line x1="0" y1="50" x2="100" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
        )
      )}
      {type === "L" && (
        rot === 0 ? (
          <>
            <line x1="50" y1="50" x2="100" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="50" y2="0" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
          </>
        ) : rot === 1 ? (
          <>
            <line x1="50" y1="50" x2="100" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="50" y2="100" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
          </>
        ) : rot === 2 ? (
          <>
            <line x1="50" y1="50" x2="0" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="50" y2="100" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
          </>
        ) : (
          <>
            <line x1="50" y1="50" x2="0" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="50" y2="0" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
          </>
        )
      )}
      {type === "T" && (
        rot === 0 ? (
          <>
            <line x1="50" y1="0" x2="50" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="0" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="100" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
          </>
        ) : rot === 1 ? (
          <>
            <line x1="50" y1="100" x2="50" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="100" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="50" y2="0" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
          </>
        ) : rot === 2 ? (
          <>
            <line x1="50" y1="100" x2="50" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="0" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="50" y2="0" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
          </>
        ) : (
          <>
            <line x1="50" y1="100" x2="50" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="0" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
            <line x1="50" y1="50" x2="100" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
          </>
        )
      )}
      {type === "X" && (
        <>
          <line x1="50" y1="0" x2="50" y2="100" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
        </>
      )}
      {type === "Cap" && (
        rot === 0 ? (
          <line x1="50" y1="50" x2="50" y2="0" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
        ) : rot === 1 ? (
          <line x1="50" y1="50" x2="100" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
        ) : rot === 2 ? (
          <line x1="50" y1="50" x2="50" y2="100" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
        ) : (
          <line x1="50" y1="50" x2="0" y2="50" stroke="#0B1E3F" strokeWidth="12" strokeLinecap="round" />
        )
      )}
    </svg>
  );
  return base;
}