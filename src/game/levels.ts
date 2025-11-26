import type { LevelConfig, Tile } from "./types";
import { deriveConnects } from "./engine";

function makeTile(type: Tile["type"], rotation: number): Tile {
  const t: Tile = { type, rotation, connects: [] };
  t.connects = deriveConnects(t);
  return t;
}

export function level1(): LevelConfig {
  // 4x4 simple starter level; solvable with minimal rotations
  const size = 4;
  const source = { r: 0, c: 0 };
  const dest = { r: 3, c: 3 };

  const layout: Tile[] = [
    makeTile("L", 1), makeTile("I", 1), makeTile("L", 0), makeTile("Cap", 2),
    makeTile("I", 0), makeTile("T", 1), makeTile("I", 0), makeTile("Cap", 2),
    makeTile("L", 3), makeTile("I", 1), makeTile("L", 2), makeTile("Cap", 0),
    makeTile("Cap", 1), makeTile("I", 1), makeTile("L", 2), makeTile("L", 2)
  ];

  return { id: 1, name: "Level 1", size, source, dest, grid: layout };
}

export type Progress = {
  unlocked: number[]; // level ids
};

const KEY = "lorenz_game_progress";

export function loadProgress(): Progress {
  if (typeof window === "undefined") return { unlocked: [1] };
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { unlocked: [1] };
    const data = JSON.parse(raw);
    if (!Array.isArray(data.unlocked)) return { unlocked: [1] };
    return { unlocked: data.unlocked };
  } catch {
    return { unlocked: [1] };
  }
}

export function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(p));
}