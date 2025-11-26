import type { Coord, Dir, LevelConfig, Tile } from "./types";

const opposite: Record<Dir, Dir> = { N: "S", S: "N", E: "W", W: "E" };

export function deriveConnects(tile: Tile): Dir[] {
  const rot = ((tile.rotation % 4) + 4) % 4;
  switch (tile.type) {
    case "I":
      return rot % 2 === 0 ? ["N", "S"] : ["E", "W"];
    case "L": {
      const sets: Dir[][] = [
        ["N", "E"],
        ["E", "S"],
        ["S", "W"],
        ["W", "N"]
      ];
      return sets[rot];
    }
    case "T": {
      const sets: Dir[][] = [
        ["N", "E", "W"],
        ["N", "E", "S"],
        ["E", "S", "W"],
        ["N", "S", "W"]
      ];
      return sets[rot];
    }
    case "X":
      return ["N", "E", "S", "W"];
    case "Cap": {
      const sets: Dir[][] = [["N"], ["E"], ["S"], ["W"]];
      return sets[rot];
    }
    default:
      return [];
  }
}

export function rotate(tile: Tile): Tile {
  const t = { ...tile, rotation: (tile.rotation + 1) % 4 };
  t.connects = deriveConnects(t);
  return t;
}

export function indexOf(level: LevelConfig, coord: Coord): number {
  return coord.r * level.size + coord.c;
}

function neighborCoord(level: LevelConfig, from: Coord, dir: Dir): Coord | null {
  const { r, c } = from;
  const size = level.size;
  if (dir === "N" && r > 0) return { r: r - 1, c };
  if (dir === "S" && r < size - 1) return { r: r + 1, c };
  if (dir === "E" && c < size - 1) return { r, c: c + 1 };
  if (dir === "W" && c > 0) return { r, c: c - 1 };
  return null;
}

export function hasPath(level: LevelConfig): boolean {
  const start = level.source;
  const goal = level.dest;
  const visited = new Set<string>();
  const stack: Coord[] = [start];

  const size = level.size;
  const seen = (p: Coord) => `${p.r},${p.c}`;

  while (stack.length) {
    const cur = stack.pop()!;
    if (cur.r === goal.r && cur.c === goal.c) return true;

    const tile = level.grid[indexOf(level, cur)];
    const connects = tile.connects;

    for (const dir of connects) {
      const next = neighborCoord(level, cur, dir);
      if (!next) continue;
      const nextTile = level.grid[indexOf(level, next)];
      if (nextTile.connects.includes(opposite[dir])) {
        const key = seen(next);
        if (!visited.has(key)) {
          visited.add(key);
          stack.push(next);
        }
      }
    }
  }
  return false;
}

export function updateTile(level: LevelConfig, coord: Coord, updater: (t: Tile) => Tile): LevelConfig {
  const idx = indexOf(level, coord);
  const newGrid = level.grid.slice();
  newGrid[idx] = updater(newGrid[idx]);
  return { ...level, grid: newGrid };
}