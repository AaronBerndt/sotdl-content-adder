export type Characteristics = Characteristic[];
export type Characteristic = {
  name: string;
  value: number;
  level: number;
};

export type Talents = Talent[];
export type Talent = {
  name: string;
  description: string;
  level: number;
  choices?: any;
};

export type Ancestry = {
  name: string;
  id: number;
  description: string;
  characteristics: Characteristics;
  talents: Talents;
  detailChoices: DetailChoices;
  book: string;
};

export type PathType = "Novice" | "Expert" | "Master";

export type Path = {
  name: string;
  type: PathType;
  description: string;
  characteristics: Characteristics;
  talents: Talents;
  detailChoices: DetailChoices;
};

export type Ancestries = Ancestry[];
export type Paths = Path[];
export type Equipment = Item[];
export type DetailChoices = DetailChoice[];
export type DetailChoice = {
  name: string;
  dice: string;
  origin: string;
  choices: string[];
};

export type Trandition =
  | "Air"
  | "Alchemy"
  | "Alteration"
  | "Arcana"
  | "Battle"
  | "Celestial"
  | "Chaos"
  | "Conjuration"
  | "Curse"
  | "Death"
  | "Demonology"
  | "Destruction"
  | "Divination"
  | "Eath"
  | "Enchantment"
  | "Fey"
  | "Fire"
  | "Forbidden"
  | "Illusion"
  | "Invocation"
  | "Life"
  | "Metal"
  | "Nature"
  | "Necromancy"
  | "Order"
  | "Primal"
  | "Protection"
  | "Rune"
  | "Shadow"
  | "Soul"
  | "Spiritualism"
  | "Storm"
  | "Technomancy"
  | "Telekinesis"
  | "Telepathy"
  | "Teleportation"
  | "Theurgy"
  | "Time"
  | "Transformation"
  | "Water";

export type Spells = Spell[];
export type Spell = {
  name: string;
  tradition: Trandition;
  level: number;
  attribute: "Will" | "Intellect";
  damage?: string;
  type: "Attack" | "Utility";
  range: string;
  duration: string;
  description: string;
};

export type Item = {
  name: string;
  description: string;
  itemType: "basic" | "weapon" | "armor";
  price: string;
  availability: string;
};

export type Weapon = Item & {
  damage: string;
  hands: 1 | 2;
  properties: string[];
  type: string;
  requirement: number;
  equiped: boolean;
};

export type Armor = Item & {
  value: number;
  type: string;
  equiped: boolean;
  requirement: number;
  properties: string[];
};
