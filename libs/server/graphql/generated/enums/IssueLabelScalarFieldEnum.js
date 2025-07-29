"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var IssueLabelScalarFieldEnum;
(function (IssueLabelScalarFieldEnum) {
    IssueLabelScalarFieldEnum["id"] = "id";
    IssueLabelScalarFieldEnum["issueId"] = "issueId";
    IssueLabelScalarFieldEnum["labelId"] = "labelId";
})(IssueLabelScalarFieldEnum || (exports.IssueLabelScalarFieldEnum = IssueLabelScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(IssueLabelScalarFieldEnum, {
    name: "IssueLabelScalarFieldEnum",
    description: undefined,
});
