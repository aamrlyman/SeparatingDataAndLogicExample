// “Indeed, the ratio of time spent reading versus writing is well over 10 to 1.
// We are constantly reading old code as part of the effort to write new code. ...
// [Therefore,] making it easy to read makes it easier to write.”
// - Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship

// “FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY.”
// ― Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship
import {
  BillingType,
  groceryList,
  GroceryItem,
  ItemType,
} from "../grocery_list_and_constants";

// add meat and produce total weights, add average cost per item type
enum TotalType {
  COST,
  QUANTITY,
  EACH,
  WEIGHT,
}
function getListTotals(groceryList: GroceryItem[], totalType: TotalType) {
  if (totalType === TotalType.COST) {
    return getTotalCost(groceryList);
  }
  if (totalType === TotalType.QUANTITY) {
    return getTotalQuantity(groceryList);
  }
  if (totalType === TotalType.EACH) {
    const filterByEach = filterGroceryList(BillingType.EACH, groceryList);
    return getTotalQuantity(filterByEach);
  }
  if (totalType === TotalType.WEIGHT) {
    const filterByLbs = filterGroceryList(BillingType.LBS, groceryList);
    return getTotalQuantity(filterByLbs);
  }
}

function costPerItemType(groceryList: GroceryItem[], itemType: ItemType) {
  const filteredList = filterGroceryList(itemType, groceryList);
  return getTotalCost(filteredList);
}

function totalWeightPerItemType(
  groceryList: GroceryItem[],
  itemType: ItemType
) {
  const filteredList = filterGroceryList(itemType, groceryList);
  return getTotalQuantity(filteredList);
}

function averageCostPerItemType(
  groceryList: GroceryItem[],
  itemType: ItemType
) {
  const filteredList = filterGroceryList(itemType, groceryList);
  return getTotalCost(filteredList) / getTotalQuantity(filteredList);
}

type filterType = ItemType | BillingType;
function filterGroceryList(filterType: filterType, groceryList: GroceryItem[]) {
  if (filterType in ItemType) {
    return groceryList.filter((item) => item.type === filterType);
  }
  return groceryList.filter((item) => item.billingType === filterType);
}

function getTotalQuantity(groceryList: GroceryItem[]) {
  return groceryList.reduce((acc, item) => acc + item.quantity, 0);
}
function getTotalCost(groceryList: GroceryItem[]) {
  return groceryList.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
