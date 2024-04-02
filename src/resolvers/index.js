import orderResolver from "./orderResolver";
import productResolver from "./productsResolver";
import Userresolver from "./userresolver";

module.exports = {
    ...orderResolver,
    ...Userresolver,
    ...productResolver
}