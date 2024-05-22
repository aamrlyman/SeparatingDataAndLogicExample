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
} from "./grocery_list";

// add cost for each item type

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
    case "meatTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.MEAT)
        .reduce((acc, item) => acc + item.price, 0);
    case "produceTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.PRODUCE)
        .reduce((acc, item) => acc + item.price, 0);
    case "dairyTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.DAIRY)
        .reduce((acc, item) => acc + item.price, 0);
    case "bakeryTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.BAKERY)
        .reduce((acc, item) => acc + item.price, 0);
    case "pantryTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.PANTRY)
        .reduce((acc, item) => acc + item.price, 0);
    case "frozenTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.FROZEN)
        .reduce((acc, item) => acc + item.price, 0);
    case "snacksTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.SNACKS)
        .reduce((acc, item) => acc + item.price, 0);
    case "beveragesTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.BEVERAGES)
        .reduce((acc, item) => acc + item.price, 0);
    case "householdTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.HOUSEHOLD)
        .reduce((acc, item) => acc + item.price, 0);
    case "personalCareTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.PERSONALCARE)
        .reduce((acc, item) => acc + item.price, 0);
    case "otherTotalCost":
      return groceryList
        .filter((item) => item.type === ItemType.OTHER)
        .reduce((acc, item) => acc + item.price, 0);
  }
}
