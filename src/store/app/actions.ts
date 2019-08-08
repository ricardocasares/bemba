import { ActionType, ClientReady } from "./model";

export const clientReady = (): ClientReady => ({
  type: ActionType.CLIENT_READY
});
