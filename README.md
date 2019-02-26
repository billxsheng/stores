#stores/redux-basic

Use stores when 

- single-responsibility rule cannot be support
  - this rule says that each module, class, or template has responsibility for a single function 
- extraneoous props is solved
  - props are passed within components where they aren't used
- you have reasonable amounts of data changing over time
- you need a single source of truth for your state
- you find that keeping all your state in a top-level component is not sufficient
  

##3 Principles
1. 1 Store
2. Store is read-only
3. Stores are mutated with pure functions