"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueOrderByRelationAggregateInput_1 = require("../inputs/IssueOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const TaskOrderByWithRelationInput_1 = require("../inputs/TaskOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SubtaskOrderByWithRelationInput = class SubtaskOrderByWithRelationInput {
};
exports.SubtaskOrderByWithRelationInput = SubtaskOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithRelationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SubtaskOrderByWithRelationInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SubtaskOrderByWithRelationInput.prototype, "testStrategy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithRelationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithRelationInput.prototype, "parentId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithRelationInput.prototype, "dependencies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SubtaskOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput)
], SubtaskOrderByWithRelationInput.prototype, "parentTask", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueOrderByRelationAggregateInput_1.IssueOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueOrderByRelationAggregateInput_1.IssueOrderByRelationAggregateInput)
], SubtaskOrderByWithRelationInput.prototype, "issues", void 0);
exports.SubtaskOrderByWithRelationInput = SubtaskOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskOrderByWithRelationInput", {})
], SubtaskOrderByWithRelationInput);
