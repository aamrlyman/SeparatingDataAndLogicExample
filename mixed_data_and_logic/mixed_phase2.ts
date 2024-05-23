import {
  BillingType,
  groceryList,
  GroceryItem,
  ItemType,
} from "../grocery_list_and_constants";

// add totalItems, totalWeight, and totalEach--
// all items NOT billed by weight to groceryInformation function

function groceryInformation(infoType: string, groceryList: GroceryItem[]) {
  switch (infoType) {
    case "produce":
      return groceryList.filter((item) => item.type === ItemType.PRODUCE);
    case "meat":
      return groceryList.filter((item) => item.type === ItemType.MEAT);
    case "dairy":
      return groceryList.filter((item) => item.type === ItemType.DAIRY);
    case "bakery":
      return groceryList.filter((item) => item.type === ItemType.BAKERY);
    case "pantry":
      return groceryList.filter((item) => item.type === ItemType.PANTRY);
    case "frozen":
      return groceryList.filter((item) => item.type === ItemType.FROZEN);
    case "snacks":
      return groceryList.filter((item) => item.type === ItemType.SNACKS);
    case "beverages":
      return groceryList.filter((item) => item.type === ItemType.BEVERAGES);
    case "household":
      return groceryList.filter((item) => item.type === ItemType.HOUSEHOLD);
    case "personal care":
      return groceryList.filter((item) => item.type === ItemType.PERSONALCARE);
    case "other":
      return groceryList.filter((item) => item.type === ItemType.OTHER);
    case "totalCost":
      return groceryList.reduce((acc, item) => acc + item.price, 0);
    case "totalItems":
      return groceryList.reduce((acc, item) => acc + item.quantity, 0);
    case "totalWeight":
      return groceryList.reduce((acc, item) => {
        if (item.billingType === BillingType.LBS) {
          return acc + item.quantity;
        }
        return acc;
      }, 0);
    case "totalEach":
      return groceryList.reduce((acc, item) => {
        if (item.billingType === BillingType.EACH) {
          return acc + item.quantity;
        }
        return acc;
      }, 0);
  }
}
