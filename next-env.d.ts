/// <reference types="next" />
/// <reference types="next/types/global" />

import { Store } from "redux";
import { BembaStore } from "@/models/state";

declare module "next" {
  export interface NextPageContext {
    store: BembaStore;
  }
}
