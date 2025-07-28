"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProjectScalarFieldEnum;
(function (ProjectScalarFieldEnum) {
    ProjectScalarFieldEnum["id"] = "id";
    ProjectScalarFieldEnum["name"] = "name";
    ProjectScalarFieldEnum["description"] = "description";
    ProjectScalarFieldEnum["color"] = "color";
    ProjectScalarFieldEnum["identifier"] = "identifier";
    ProjectScalarFieldEnum["icon"] = "icon";
    ProjectScalarFieldEnum["percentComplete"] = "percentComplete";
    ProjectScalarFieldEnum["startDate"] = "startDate";
    ProjectScalarFieldEnum["health"] = "health";
    ProjectScalarFieldEnum["leadId"] = "leadId";
    ProjectScalarFieldEnum["createdAt"] = "createdAt";
    ProjectScalarFieldEnum["updatedAt"] = "updatedAt";
})(ProjectScalarFieldEnum || (exports.ProjectScalarFieldEnum = ProjectScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProjectScalarFieldEnum, {
    name: "ProjectScalarFieldEnum",
    description: undefined,
});
