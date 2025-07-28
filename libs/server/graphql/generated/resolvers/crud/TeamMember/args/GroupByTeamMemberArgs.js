"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTeamMemberArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamMemberOrderByWithAggregationInput_1 = require("../../../inputs/TeamMemberOrderByWithAggregationInput");
const TeamMemberScalarWhereWithAggregatesInput_1 = require("../../../inputs/TeamMemberScalarWhereWithAggregatesInput");
const TeamMemberWhereInput_1 = require("../../../inputs/TeamMemberWhereInput");
const TeamMemberScalarFieldEnum_1 = require("../../../../enums/TeamMemberScalarFieldEnum");
let GroupByTeamMemberArgs = class GroupByTeamMemberArgs {
};
exports.GroupByTeamMemberArgs = GroupByTeamMemberArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberWhereInput_1.TeamMemberWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberWhereInput_1.TeamMemberWhereInput)
], GroupByTeamMemberArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberOrderByWithAggregationInput_1.TeamMemberOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTeamMemberArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamMemberScalarFieldEnum_1.TeamMemberScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTeamMemberArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberScalarWhereWithAggregatesInput_1.TeamMemberScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberScalarWhereWithAggregatesInput_1.TeamMemberScalarWhereWithAggregatesInput)
], GroupByTeamMemberArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTeamMemberArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTeamMemberArgs.prototype, "skip", void 0);
exports.GroupByTeamMemberArgs = GroupByTeamMemberArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTeamMemberArgs);
