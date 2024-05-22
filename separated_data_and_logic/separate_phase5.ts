import {
  BillingType,
  groceryList,
  GroceryItem,
  ItemType,
  Unit,
  units,
  TotalType,
} from "../grocery_list_and_constants";

// add meat and produce total weights, add average cost per item type

function getListTotals(
  groceryList: GroceryItem[],
  totalType: TotalType,
  outPutUnit: Unit
) {
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
    const totalWeight = getTotalQuantity(filterByLbs);
    return convertWeightUnits(totalWeight, outPutUnit);
  }
}
function convertWeightUnits(weight: number, unit: Unit) {
  return weight * units[unit].multiplierFromPounds;
}

function costPerItemType(groceryList: GroceryItem[], itemType: ItemType) {
  const filteredList = filterGroceryList(itemType, groceryList);
  return getTotalCost(filteredList);
}

function totalWeightPerItemType(
  groceryList: GroceryItem[],
  itemType: ItemType,
  outPutUnit: Unit
) {
  const filteredList = filterGroceryList(itemType, groceryList);
  const TotalItemTypeWeight = getTotalQuantity(filteredList);
  return convertWeightUnits(TotalItemTypeWeight, outPutUnit);
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
