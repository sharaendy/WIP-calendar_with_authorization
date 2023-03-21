import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TRootState } from "../store/types";

export const UseTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
