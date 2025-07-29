"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var NullsOrder;
(function (NullsOrder) {
    NullsOrder["first"] = "first";
    NullsOrder["last"] = "last";
})(NullsOrder || (exports.NullsOrder = NullsOrder = {}));
TypeGraphQL.registerEnumType(NullsOrder, {
    name: "NullsOrder",
    description: undefined,
});
