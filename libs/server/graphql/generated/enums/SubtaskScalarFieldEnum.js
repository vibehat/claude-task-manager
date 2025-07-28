"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SubtaskScalarFieldEnum;
(function (SubtaskScalarFieldEnum) {
    SubtaskScalarFieldEnum["id"] = "id";
    SubtaskScalarFieldEnum["title"] = "title";
    SubtaskScalarFieldEnum["description"] = "description";
    SubtaskScalarFieldEnum["details"] = "details";
    SubtaskScalarFieldEnum["testStrategy"] = "testStrategy";
    SubtaskScalarFieldEnum["status"] = "status";
    SubtaskScalarFieldEnum["parentId"] = "parentId";
    SubtaskScalarFieldEnum["dependencies"] = "dependencies";
    SubtaskScalarFieldEnum["createdAt"] = "createdAt";
    SubtaskScalarFieldEnum["updatedAt"] = "updatedAt";
})(SubtaskScalarFieldEnum || (exports.SubtaskScalarFieldEnum = SubtaskScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SubtaskScalarFieldEnum, {
    name: "SubtaskScalarFieldEnum",
    description: undefined,
});
