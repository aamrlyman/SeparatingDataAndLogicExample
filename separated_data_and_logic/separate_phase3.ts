import {
  BillingType,
  groceryList,
  GroceryItem,
  ItemType,
} from "../grocery_list_and_constants";

// add cost for each item type
// two bugs calc $ and calc total items

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
