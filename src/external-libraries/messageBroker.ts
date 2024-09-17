import { injectable } from "inversify";
import { IMessageBroker } from "../interface/IMessageBroker";

@injectable()
export class MessageBroker implements IMessageBroker {
  NotifyToPromotionService(product: unknown) {
    console.log("Calling message broker");
    return true;
  }
}
