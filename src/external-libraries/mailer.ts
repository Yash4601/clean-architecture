import { injectable } from "inversify";
import { IMailer } from "../interface/IMailer";

@injectable()
export class Mailer implements IMailer {
  SendEmail(to: string, product: unknown) {
    // sendgrid implementation
    console.log("sending mail");
    return true;
  }
}
