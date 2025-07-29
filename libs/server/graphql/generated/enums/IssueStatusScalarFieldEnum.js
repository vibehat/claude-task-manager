"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var IssueStatusScalarFieldEnum;
(function (IssueStatusScalarFieldEnum) {
    IssueStatusScalarFieldEnum["id"] = "id";
    IssueStatusScalarFieldEnum["name"] = "name";
    IssueStatusScalarFieldEnum["color"] = "color";
    IssueStatusScalarFieldEnum["iconName"] = "iconName";
    IssueStatusScalarFieldEnum["createdAt"] = "createdAt";
    IssueStatusScalarFieldEnum["updatedAt"] = "updatedAt";
})(IssueStatusScalarFieldEnum || (exports.IssueStatusScalarFieldEnum = IssueStatusScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(IssueStatusScalarFieldEnum, {
    name: "IssueStatusScalarFieldEnum",
    description: undefined,
});
