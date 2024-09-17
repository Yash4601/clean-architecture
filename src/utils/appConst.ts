// It's needed to bind our dependency with the container
export const INTERFACE_TYPE = {
  ProductRepository: Symbol.for("ProductRepository"),
  ProductInteractor: Symbol.for("ProductInteractor"),
  ProductController: Symbol.for("ProductController"),
  Mailer: Symbol.for("Mailer"),
  MessageBroker: Symbol.for("MessageBroker"),
};
