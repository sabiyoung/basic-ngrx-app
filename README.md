# basic-ngrx-app
First step
## generate the app
ng new client --routing --style scss --skip-tests
## install schematic
ng add @ngrx/schematics@latest

## install devtools
ng add @ngrx/store-devtools@latest

## install ngrx store
ng add @ngrx/store@latest

## install store, root state
 ng generate store State --root --module app.module.ts

 ## install reducers
 ng generate reducer User --reducers reducers/index.ts

 ## install actions
 ng generate action User --group

 ## install selectors
 ng generate selector User --group

 ## install components
ng g c components/add-user
ng g c components/list-users
