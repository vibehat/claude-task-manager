"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTeamArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamOrderByWithAggregationInput_1 = require("../../../inputs/TeamOrderByWithAggregationInput");
const TeamScalarWhereWithAggregatesInput_1 = require("../../../inputs/TeamScalarWhereWithAggregatesInput");
const TeamWhereInput_1 = require("../../../inputs/TeamWhereInput");
const TeamScalarFieldEnum_1 = require("../../../../enums/TeamScalarFieldEnum");
let GroupByTeamArgs = class GroupByTeamArgs {
};
exports.GroupByTeamArgs = GroupByTeamArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamWhereInput_1.TeamWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamWhereInput_1.TeamWhereInput)
], GroupByTeamArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamOrderByWithAggregationInput_1.TeamOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTeamArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TeamScalarFieldEnum_1.TeamScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTeamArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamScalarWhereWithAggregatesInput_1.TeamScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamScalarWhereWithAggregatesInput_1.TeamScalarWhereWithAggregatesInput)
], GroupByTeamArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTeamArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTeamArgs.prototype, "skip", void 0);
exports.GroupByTeamArgs = GroupByTeamArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTeamArgs);
