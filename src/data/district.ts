export interface District {
  attributes: Attribute[];
  name: string;
  id: number;
}

export interface Attribute {
  label: string;
  value: number;
  unit: string;
  winCondition: "higher" | "lower";
}
