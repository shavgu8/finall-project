import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispach,Rootstate } from "./types";

export const useAppDispach = () => useDispatch<AppDispach>()
export const useAppSelector:TypedUseSelectorHook<Rootstate> = useSelector