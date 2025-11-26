export type Dir = "N" | "E" | "S" | "W";

export type TileType = "I" | "L" | "T" | "X" | "Cap";

export type Tile = {
  type: TileType;
  rotation: number; // 0..3 (each 90° clockwise)
  connects: Dir[]; // derived from type + rotation
};

export type Coord = { r: number; c: number };

export type LevelConfig = {
  id: number;
  name: string;
  size: number; // grid size NxN
  source: Coord;
  dest: Coord;
  grid: Tile[]; // length size*size
};