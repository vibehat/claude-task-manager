"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const TeamMemberTeamIdUserIdCompoundUniqueInput_1 = require("../inputs/TeamMemberTeamIdUserIdCompoundUniqueInput");
const TeamMemberWhereInput_1 = require("../inputs/TeamMemberWhereInput");
const TeamRelationFilter_1 = require("../inputs/TeamRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let TeamMemberWhereUniqueInput = class TeamMemberWhereUniqueInput {
};
exports.TeamMemberWhereUniqueInput = TeamMemberWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TeamMemberWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberTeamIdUserIdCompoundUniqueInput_1.TeamMemberTeamIdUserIdCompoundUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberTeamIdUserIdCompoundUniqueInput_1.TeamMemberTeamIdUserIdCompoundUniqueInput)
], TeamMemberWhereUniqueInput.prototype, "teamId_userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereInput_1.TeamMemberWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereInput_1.TeamMemberWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereInput_1.TeamMemberWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamMemberWhereUniqueInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamMemberWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamRelationFilter_1.TeamRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamRelationFilter_1.TeamRelationFilter)
], TeamMemberWhereUniqueInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], TeamMemberWhereUniqueInput.prototype, "user", void 0);
exports.TeamMemberWhereUniqueInput = TeamMemberWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberWhereUniqueInput", {})
], TeamMemberWhereUniqueInput);
