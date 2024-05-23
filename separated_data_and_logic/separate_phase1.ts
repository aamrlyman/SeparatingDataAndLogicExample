import {
  BillingType,
  groceryList,
  GroceryItem,
  ItemType,
} from "../grocery_list_and_constants";

// filter list by item type and get total cost

function filterGroceriesByItemType(
  itemType: ItemType,
  groceryList: GroceryItem[]
) {
  return groceryList.filter((item) => item.type === itemType);
}

function getTotalCost(groceryList: GroceryItem[]) {
  return groceryList.reduce((acc, item) => acc + item.price, 0);
}
