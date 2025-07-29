"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TeamMemberScalarFieldEnum;
(function (TeamMemberScalarFieldEnum) {
    TeamMemberScalarFieldEnum["id"] = "id";
    TeamMemberScalarFieldEnum["teamId"] = "teamId";
    TeamMemberScalarFieldEnum["userId"] = "userId";
})(TeamMemberScalarFieldEnum || (exports.TeamMemberScalarFieldEnum = TeamMemberScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TeamMemberScalarFieldEnum, {
    name: "TeamMemberScalarFieldEnum",
    description: undefined,
});
