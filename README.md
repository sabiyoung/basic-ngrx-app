# basic-ngrx-app
First step
## generate the app
ng new client --routing --style scss --skip-tests
## install schematic
ng add @ngrx/schematics@latest

#3 install devtools
ng add @ngrx/store-devtools@latest

## install ngrx store
ng add @ngrx/store@latest

## install store, root state
 ng generate store State --root --module app.module.ts

 ## install reducers
 ng generate reducer User --reducers reducers/index.ts