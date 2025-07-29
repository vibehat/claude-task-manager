"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TeamScalarFieldEnum;
(function (TeamScalarFieldEnum) {
    TeamScalarFieldEnum["id"] = "id";
    TeamScalarFieldEnum["name"] = "name";
    TeamScalarFieldEnum["icon"] = "icon";
    TeamScalarFieldEnum["joined"] = "joined";
    TeamScalarFieldEnum["color"] = "color";
    TeamScalarFieldEnum["createdAt"] = "createdAt";
    TeamScalarFieldEnum["updatedAt"] = "updatedAt";
})(TeamScalarFieldEnum || (exports.TeamScalarFieldEnum = TeamScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TeamScalarFieldEnum, {
    name: "TeamScalarFieldEnum",
    description: undefined,
});
