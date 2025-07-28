"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueAvgOrderByAggregateInput_1 = require("../inputs/IssueAvgOrderByAggregateInput");
const IssueCountOrderByAggregateInput_1 = require("../inputs/IssueCountOrderByAggregateInput");
const IssueMaxOrderByAggregateInput_1 = require("../inputs/IssueMaxOrderByAggregateInput");
const IssueMinOrderByAggregateInput_1 = require("../inputs/IssueMinOrderByAggregateInput");
const IssueSumOrderByAggregateInput_1 = require("../inputs/IssueSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IssueOrderByWithAggregationInput = class IssueOrderByWithAggregationInput {
};
exports.IssueOrderByWithAggregationInput = IssueOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithAggregationInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithAggregationInput.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "cycleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "subtaskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithAggregationInput.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "parentIssueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "assigneeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], IssueOrderByWithAggregationInput.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCountOrderByAggregateInput_1.IssueCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCountOrderByAggregateInput_1.IssueCountOrderByAggregateInput)
], IssueOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueAvgOrderByAggregateInput_1.IssueAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueAvgOrderByAggregateInput_1.IssueAvgOrderByAggregateInput)
], IssueOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueMaxOrderByAggregateInput_1.IssueMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueMaxOrderByAggregateInput_1.IssueMaxOrderByAggregateInput)
], IssueOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueMinOrderByAggregateInput_1.IssueMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueMinOrderByAggregateInput_1.IssueMinOrderByAggregateInput)
], IssueOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueSumOrderByAggregateInput_1.IssueSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueSumOrderByAggregateInput_1.IssueSumOrderByAggregateInput)
], IssueOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.IssueOrderByWithAggregationInput = IssueOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueOrderByWithAggregationInput", {})
], IssueOrderByWithAggregationInput);
