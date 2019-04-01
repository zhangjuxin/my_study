require("reflect-metadata")
class C {
    // @Reflect.metadata(metadataKey, metadataValue)
    method() {
    }
}
Reflect.defineMetadata("yideng", "🌶  🌰", C.prototype, "method");

let metadataValue = Reflect.getMetadata("yideng", C.prototype, "method");
console.log(metadataValue);