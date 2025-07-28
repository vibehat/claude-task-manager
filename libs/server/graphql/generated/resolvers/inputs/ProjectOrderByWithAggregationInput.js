"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectAvgOrderByAggregateInput_1 = require("../inputs/ProjectAvgOrderByAggregateInput");
const ProjectCountOrderByAggregateInput_1 = require("../inputs/ProjectCountOrderByAggregateInput");
const ProjectMaxOrderByAggregateInput_1 = require("../inputs/ProjectMaxOrderByAggregateInput");
const ProjectMinOrderByAggregateInput_1 = require("../inputs/ProjectMinOrderByAggregateInput");
const ProjectSumOrderByAggregateInput_1 = require("../inputs/ProjectSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProjectOrderByWithAggregationInput = class ProjectOrderByWithAggregationInput {
};
exports.ProjectOrderByWithAggregationInput = ProjectOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProjectOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProjectOrderByWithAggregationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProjectOrderByWithAggregationInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProjectOrderByWithAggregationInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectOrderByWithAggregationInput.prototype, "percentComplete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProjectOrderByWithAggregationInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectOrderByWithAggregationInput.prototype, "health", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ProjectOrderByWithAggregationInput.prototype, "leadId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProjectOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCountOrderByAggregateInput_1.ProjectCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCountOrderByAggregateInput_1.ProjectCountOrderByAggregateInput)
], ProjectOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectAvgOrderByAggregateInput_1.ProjectAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectAvgOrderByAggregateInput_1.ProjectAvgOrderByAggregateInput)
], ProjectOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectMaxOrderByAggregateInput_1.ProjectMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectMaxOrderByAggregateInput_1.ProjectMaxOrderByAggregateInput)
], ProjectOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectMinOrderByAggregateInput_1.ProjectMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectMinOrderByAggregateInput_1.ProjectMinOrderByAggregateInput)
], ProjectOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectSumOrderByAggregateInput_1.ProjectSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectSumOrderByAggregateInput_1.ProjectSumOrderByAggregateInput)
], ProjectOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.ProjectOrderByWithAggregationInput = ProjectOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectOrderByWithAggregationInput", {})
], ProjectOrderByWithAggregationInput);
