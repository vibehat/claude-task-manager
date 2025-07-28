"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProjectArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectOrderByWithAggregationInput_1 = require("../../../inputs/ProjectOrderByWithAggregationInput");
const ProjectScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProjectScalarWhereWithAggregatesInput");
const ProjectWhereInput_1 = require("../../../inputs/ProjectWhereInput");
const ProjectScalarFieldEnum_1 = require("../../../../enums/ProjectScalarFieldEnum");
let GroupByProjectArgs = class GroupByProjectArgs {
};
exports.GroupByProjectArgs = GroupByProjectArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], GroupByProjectArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectOrderByWithAggregationInput_1.ProjectOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProjectArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProjectScalarFieldEnum_1.ProjectScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProjectArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectScalarWhereWithAggregatesInput_1.ProjectScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectScalarWhereWithAggregatesInput_1.ProjectScalarWhereWithAggregatesInput)
], GroupByProjectArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProjectArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProjectArgs.prototype, "skip", void 0);
exports.GroupByProjectArgs = GroupByProjectArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProjectArgs);
