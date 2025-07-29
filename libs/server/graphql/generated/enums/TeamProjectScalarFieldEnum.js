"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TeamProjectScalarFieldEnum;
(function (TeamProjectScalarFieldEnum) {
    TeamProjectScalarFieldEnum["id"] = "id";
    TeamProjectScalarFieldEnum["teamId"] = "teamId";
    TeamProjectScalarFieldEnum["projectId"] = "projectId";
})(TeamProjectScalarFieldEnum || (exports.TeamProjectScalarFieldEnum = TeamProjectScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TeamProjectScalarFieldEnum, {
    name: "TeamProjectScalarFieldEnum",
    description: undefined,
});
