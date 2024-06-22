import store from "./store";
export type AppDispach = typeof store.dispatch
export type Rootstate  = ReturnType<typeof store.getState>