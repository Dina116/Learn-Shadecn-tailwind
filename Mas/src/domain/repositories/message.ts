export interface IMessageRepo {
  ConnectedDevices(): Promise<string[]>;
}
