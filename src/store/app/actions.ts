import { ActionType, BembaClientReady } from "./model";

export const clientReady = (): BembaClientReady => ({
  type: ActionType.CLIENT_READY
});
