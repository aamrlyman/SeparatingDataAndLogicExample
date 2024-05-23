# SeparatingDataAndLogicExample
A case study in the value of separating data structures from logic

## Intro
### Story: 

Reach becomes really popular with restaurants so there is a high demand for grocery list reporting 

#### New Feature (Phase 1): Filter grocery list by item type
_Traditional Universe_:
Bob the new dev writes the function quickly and users are happy

_Separated logic data universe_:
Bob sees that grocery item is a fixed concept that can be a data type
Separates data from logic				

#### New feature (Phase 2): Add total Items, totalWeight, and totalEach 
_Traditional Universe_: 
Adds, probably should write some unit tests, but there are now a lot of cases to test and the logic is pretty simple so…
_Separated logic data universe_:
Sees that the filter function needs to be more generalized
Creates a get totals function 
See there will be more changes coming
Writes unit tests and catches a bugs
 - $ calculation 
Total items 

#### New Feature (Phase 3): Add cost per itemType

_Traditional Universe_:
Some bugs come in from live:
users don’t want each pound of bananas to be considered a separate item
The cost is incorrect if there is more than one item	
Add the cost per item
After the bug there really should be unit tests, but the plan is to do it after the big new feature is done

Separated Data and Logic universe:
Adds costPerITem function() and more test cases


#### New Featuer (Phase 4): Add meat and produce total weights, add average cost per item type

_Traditional Universe_:
 Adds new average cases 100 more lines
Unit tests are now really overwhelming 

_Separated logic data universe_:
Two new functions that use existing logic 14 lines
Adds a few more unit tests to make sure things are working

Phase 5
#### New Feature (Phase 5): Add the option to return total weight in lbs, oz, g or kg

_Traditional Universe_:
Another hundred lines of code

_Separated logic data universe_:
Adds a new units data structure and a simple function that gets called in two places in the existing code
Adds some unit tests 

### Conclusion

"In any given system we will sometimes want the flexibility to add new data types, and so we prefer objects for that part of the system. 
Other times we will want the flexibility to add new behaviors, and so in that part of the system we prefer data types and procedures."

Is procedural code the answer?
- Am I working with a single concept that can be well represented in a data structure? 



"In any given system we will sometimes want the flexibility to add new data types, and so we prefer objects for that part of the system. 
Other times we will want the flexibility to add new behaviors, and so in that part of the system we prefer data types and procedures."

Is procedural code the answer?
- Am I working with a single concept that can be well represented in a data structure? 

