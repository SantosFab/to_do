import "styled-components";
import { ITheme } from "./themes/ITheme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
