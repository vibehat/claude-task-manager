"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const TeamRelationFilter_1 = require("../inputs/TeamRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let TeamMemberWhereInput = class TeamMemberWhereInput {
};
exports.TeamMemberWhereInput = TeamMemberWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamMemberWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamMemberWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamMemberWhereInput.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TeamMemberWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamRelationFilter_1.TeamRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamRelationFilter_1.TeamRelationFilter)
], TeamMemberWhereInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], TeamMemberWhereInput.prototype, "user", void 0);
exports.TeamMemberWhereInput = TeamMemberWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberWhereInput", {})
], TeamMemberWhereInput);
