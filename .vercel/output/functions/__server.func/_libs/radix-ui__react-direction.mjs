import { r as reactExports } from "./react.mjs";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var Direction = {
  LTR: "ltr"
};
var DirectionContext = reactExports.createContext(void 0);
function useDirection(localDir) {
  const globalDir = reactExports.useContext(DirectionContext);
  return localDir || globalDir || Direction.LTR;
}
__name(useDirection, "useDirection");
export {
  useDirection as u
};
