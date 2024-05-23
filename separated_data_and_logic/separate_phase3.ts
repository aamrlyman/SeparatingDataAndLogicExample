import {
  BillingType,
  groceryList,
  GroceryItem,
  ItemType,
  TotalType,
} from "../grocery_list_and_constants";

// add cost for each item type
// two bugs calc $ and calc total items

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

// unit test list
const groceryList1: GroceryItem[] = [
  {
    name: "apple",
    type: ItemType.PRODUCE,
    price: 2.5,
    quantity: 2,
    billingType: BillingType.LBS,
  },
  {
    name: "banana",
    type: ItemType.PRODUCE,
    price: 0.75,
    quantity: 3,
    billingType: BillingType.LBS,
  },
  {
    name: "chicken",
    type: ItemType.MEAT,
    price: 5,
    quantity: 1,
    billingType: BillingType.EACH,
  },
  {
    name: "milk",
    type: ItemType.DAIRY,
    price: 3,
    quantity: 2,
    billingType: BillingType.EACH,
  },
];

// unit tests
expect(getListTotals(groceryList1, TotalType.COST)).toBe(18.25);
expect(getListTotals(groceryList1, TotalType.QUANTITY)).toBe(4);
expect(getListTotals(groceryList1, TotalType.EACH)).toBe(3);
expect(getListTotals(groceryList1, TotalType.WEIGHT)).toBe(5);
expect(
  filterGroceryList(ItemType.PRODUCE, groceryList1).map((item) => item.name)
).toEqual(["apple", "banana"]);
expect(costPerItemType(groceryList1, ItemType.PRODUCE)).toBe(7.75);
expect(costPerItemType(groceryList1, ItemType.MEAT)).toBe(5);
expect(costPerItemType(groceryList1, ItemType.BEVERAGES)).toBe(0);
