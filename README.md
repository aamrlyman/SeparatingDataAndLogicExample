# SeparatingDataAndLogicExample
A case study in the value of separating data structures from logic

### Story: 

Reach becomes really popular with restaurants so there is a high demand for grocery list reporting 

#### New Feature (Phase 1): Filter grocery list by item type
_Traditional Universe_:<br>
Bob the new dev, quickly writes a switch case function that is easy to comprehend and pushes it live. Users are happy!

_Separated logic data universe_: <br>
Bob sees that grocery item is a fixed concept that can be a data type. He decides to separates the data from logic. The outcome is the same. 				

#### New feature (Phase 2): Add total Items, totalWeight, and totalEach 
_Traditional Universe_: <br>
Bob adds the needed cases to the switch case, realizes that he probably should write some unit tests, but there are now a lot of cases to test and the logic is pretty simple so…
_Separated logic data universe_:
Bob sees that the filter function needs to be more generalized, and creates a get totals function. Bob guesses that there will be more changes coming so he writes some units tests and catches bugs related to:
 - Total cost calculation 
 - Total item calculation 

#### New Feature (Phase 3): Add cost per itemType

_Traditional Universe_:<br>
Some bugs come in from live:
Users don’t want each pound of bananas to be considered as a separate item and the total cost is incorrect if there is more than one item.	
Bob fixes the bug and sees that there really should be some unit tests, but the plan is to do it after the big new feature is done...

_Separated logic data universe_:<br>
Bob adds a costPerItem function() and a few more unit tests

#### New Featuer (Phase 4): Add meat and produce total weights, add average cost per item type

_Traditional Universe_:<br>
 Bob adds new average cases 100 more lines. Now the thought of writing some unit tests is really overwhelming... 

_Separated logic data universe_:<br>
Bob adds two new functions that use existing--logic 14 lines. He then adds a few more unit tests to make sure things are working as expected.

#### New Feature (Phase 5): Add the option to return total weight in lbs, oz, g or kg

_Traditional Universe_:<br>
Bob adds another hundred lines of code to incorporate the new weight unit outputs, the thought of unit tests is no longer even thought of as viable.
Result: 295 lines of repetitive code that is hard to navigate, hard to update, and likely to have more bugs.

_Separated logic data universe_:<br>
Bob adds a new units data structure and a simple function that gets called in two places in the existing code, and then adds some unit tests. 
Result: 74 lines of managble code that continue to be easy to update and scale as needs arise.

### Conclusion

"In any given system we will sometimes want the flexibility to add new data types, and so we prefer objects for that part of the system. 
Other times we will want the flexibility to add new behaviors, and so in that part of the system we prefer data types and procedures." 
- Robert Martin Clean Code

Is procedural code the answer?
- Am I working with a single concept that can be well represented in a data structure? If yes, then procedural code will lead to code that is easier to augment, test, and maintain. 


