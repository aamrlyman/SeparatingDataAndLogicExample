export enum BillingType {
  LBS = "lbs",
  EACH = "each",
}
export interface UnitConversions {
  multiplierFromPounds: number;
}

export type Unit = "lbs" | "kg" | "g" | "oz"; // Add more units as needed

export const units: Record<Unit, UnitConversions> = {
  lbs: { multiplierFromPounds: 1 },
  kg: { multiplierFromPounds: 0.453592 },
  g: { multiplierFromPounds: 0.000453592 },
  oz: { multiplierFromPounds: 0.0625 },
};

export enum TotalType {
  COST,
  QUANTITY,
  EACH,
  WEIGHT,
}

export const unitIndexes = {
  LBS: 0,
  KG: 1,
  G: 2,
  OZ: 3,
};

export enum ItemType {
  PRODUCE = "produce",
  MEAT = "meat",
  DAIRY = "dairy",
  BAKERY = "bakery",
  PANTRY = "pantry",
  FROZEN = "frozen",
  SNACKS = "snacks",
  BEVERAGES = "beverages",
  HOUSEHOLD = "household",
  PERSONALCARE = "personal care",
  OTHER = "other",
}

export interface GroceryItem {
  name: string;
  price: number;
  quantity: number;
  type: string;
  billingType: BillingType;
}

export const groceryList: GroceryItem[] = [
  {
    name: "bananas",
    price: 2.99,
    billingType: BillingType.LBS,
    quantity: 3,
    type: "produce",
  },
  {
    name: "apples",
    price: 3.99,
    billingType: BillingType.LBS,
    quantity: 2,
    type: "produce",
  },
  {
    name: "almonds",
    price: 8.99,
    billingType: BillingType.LBS,
    quantity: 16,
    type: "snacks",
  },
  {
    name: "chicken",
    price: 5.99,
    billingType: BillingType.LBS,
    quantity: 3,
    type: "meat",
  },
  {
    name: "milk",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 2,
    type: "dairy",
  },
  {
    name: "bread",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "bakery",
  },
  {
    name: "cereal",
    price: 3.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "frozen pizza",
    price: 4.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "frozen",
  },
  {
    name: "chips",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "snacks",
  },
  {
    name: "soda",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "beverages",
  },
  {
    name: "toothpaste",
    price: 3.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "personal care",
  },
  {
    name: "shampoo",
    price: 4.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "personal care",
  },
  {
    name: "soap",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "personal care",
  },
  {
    name: "paper towels",
    price: 5.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "household",
  },
  {
    name: "toilet paper",
    price: 6.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "household",
  },
  {
    name: "napkins",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "household",
  },
  {
    name: "trash bags",
    price: 7.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "household",
  },
  {
    name: "aluminum foil",
    price: 3.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "household",
  },
  {
    name: "ziploc bags",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "household",
  },
  {
    name: "pasta",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "rice",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "beans",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned tomatoes",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned beans",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned soup",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned vegetables",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned fruit",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned meat",
    price: 3.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned fish",
    price: 4.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned pasta",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned sauce",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned soup",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned broth",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned chili",
    price: 2.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned stew",
    price: 3.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned beans",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned vegetables",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
  {
    name: "canned fruit",
    price: 1.99,
    billingType: BillingType.EACH,
    quantity: 1,
    type: "pantry",
  },
];
