"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTeamMemberArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberCreateInput_1 = require("../../../inputs/TeamMemberCreateInput");
const TeamMemberUpdateInput_1 = require("../../../inputs/TeamMemberUpdateInput");
const TeamMemberWhereUniqueInput_1 = require("../../../inputs/TeamMemberWhereUniqueInput");
let UpsertOneTeamMemberArgs = class UpsertOneTeamMemberArgs {
};
exports.UpsertOneTeamMemberArgs = UpsertOneTeamMemberArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereUniqueInput_1.TeamMemberWhereUniqueInput)
], UpsertOneTeamMemberArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberCreateInput_1.TeamMemberCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberCreateInput_1.TeamMemberCreateInput)
], UpsertOneTeamMemberArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateInput_1.TeamMemberUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateInput_1.TeamMemberUpdateInput)
], UpsertOneTeamMemberArgs.prototype, "update", void 0);
exports.UpsertOneTeamMemberArgs = UpsertOneTeamMemberArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTeamMemberArgs);
