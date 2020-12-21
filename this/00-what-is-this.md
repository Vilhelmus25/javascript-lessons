# A globális kódban a global object, ami böngészőben a window
# Egy objektum metódusában(közvetlenül) az objektum maga
# Függvényen belül, strict mód nélkül a global object, ami böngészőben a window
# Függvényen belül, strict módban undefined
# Egy eventnél az elem maga, amin az esemény bekövetkezett
# bind(), call(), apply() metódusoknál bármi
# constructor függvénynél az objektumpéldány amit létrehozunk a segítségével
# Az arrow function a parent scope-ból örökli a this-t