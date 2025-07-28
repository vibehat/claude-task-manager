"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTeamProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamProjectOrderByWithAggregationInput_1 = require("../../../inputs/TeamProjectOrderByWithAggregationInput");
const TeamProjectScalarWhereWithAggregatesInput_1 = require("../../../inputs/TeamProjectScalarWhereWithAggregatesInput");
const TeamProjectWhereInput_1 = require("../../../inputs/TeamProjectWhereInput");
const TeamProjectScalarFieldEnum_1 = require("../../../../enums/TeamProjectScalarFieldEnum");
let GroupByTeamProjectArgs = class GroupByTeamProjectArgs {
};
exports.GroupByTeamProjectArgs = GroupByTeamProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectWhereInput_1.TeamProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectWhereInput_1.TeamProjectWhereInput)
], GroupByTeamProjectArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectOrderByWithAggregationInput_1.TeamProjectOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTeamProjectArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamProjectScalarFieldEnum_1.TeamProjectScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTeamProjectArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectScalarWhereWithAggregatesInput_1.TeamProjectScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectScalarWhereWithAggregatesInput_1.TeamProjectScalarWhereWithAggregatesInput)
], GroupByTeamProjectArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTeamProjectArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTeamProjectArgs.prototype, "skip", void 0);
exports.GroupByTeamProjectArgs = GroupByTeamProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTeamProjectArgs);
