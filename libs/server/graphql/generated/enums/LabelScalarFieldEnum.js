"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LabelScalarFieldEnum;
(function (LabelScalarFieldEnum) {
    LabelScalarFieldEnum["id"] = "id";
    LabelScalarFieldEnum["name"] = "name";
    LabelScalarFieldEnum["color"] = "color";
    LabelScalarFieldEnum["description"] = "description";
    LabelScalarFieldEnum["createdAt"] = "createdAt";
    LabelScalarFieldEnum["updatedAt"] = "updatedAt";
})(LabelScalarFieldEnum || (exports.LabelScalarFieldEnum = LabelScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LabelScalarFieldEnum, {
    name: "LabelScalarFieldEnum",
    description: undefined,
});
