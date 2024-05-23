import {
  BillingType,
  groceryList,
  GroceryItem,
  ItemType,
  TotalType,
} from "../grocery_list_and_constants";

// add totalItems, totalWeight, and totalEach--
// all items NOT billed by weight to groceryInformation function

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

type filterType = ItemType | BillingType;
function filterGroceryList(filterType: filterType, groceryList: GroceryItem[]) {
  if (filterType in ItemType) {
    return groceryList.filter((item) => item.type === filterType);
  }
  return groceryList.filter((item) => item.billingType === filterType);
}

function getTotalQuantity(groceryList: GroceryItem[]) {
  return groceryList.reduce((acc, item) => {
    if (item.billingType === BillingType.LBS) {
      return (acc += 1);
    } else {
      return acc + item.quantity;
    }
  }, 0);
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
