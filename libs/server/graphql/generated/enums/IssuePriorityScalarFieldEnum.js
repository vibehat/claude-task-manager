"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var IssuePriorityScalarFieldEnum;
(function (IssuePriorityScalarFieldEnum) {
    IssuePriorityScalarFieldEnum["id"] = "id";
    IssuePriorityScalarFieldEnum["name"] = "name";
    IssuePriorityScalarFieldEnum["iconName"] = "iconName";
    IssuePriorityScalarFieldEnum["order"] = "order";
    IssuePriorityScalarFieldEnum["createdAt"] = "createdAt";
    IssuePriorityScalarFieldEnum["updatedAt"] = "updatedAt";
})(IssuePriorityScalarFieldEnum || (exports.IssuePriorityScalarFieldEnum = IssuePriorityScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(IssuePriorityScalarFieldEnum, {
    name: "IssuePriorityScalarFieldEnum",
    description: undefined,
});
