"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTeamMemberOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberWhereUniqueInput_1 = require("../../../inputs/TeamMemberWhereUniqueInput");
let FindUniqueTeamMemberOrThrowArgs = class FindUniqueTeamMemberOrThrowArgs {
};
exports.FindUniqueTeamMemberOrThrowArgs = FindUniqueTeamMemberOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], FindUniqueTeamMemberOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueTeamMemberOrThrowArgs = FindUniqueTeamMemberOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTeamMemberOrThrowArgs);
