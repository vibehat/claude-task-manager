"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTeamMemberArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberWhereUniqueInput_1 = require("../../../inputs/TeamMemberWhereUniqueInput");
let FindUniqueTeamMemberArgs = class FindUniqueTeamMemberArgs {
};
exports.FindUniqueTeamMemberArgs = FindUniqueTeamMemberArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], FindUniqueTeamMemberArgs.prototype, "where", void 0);
exports.FindUniqueTeamMemberArgs = FindUniqueTeamMemberArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTeamMemberArgs);
