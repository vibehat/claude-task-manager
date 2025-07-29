"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueStatusOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueStatusCountOrderByAggregateInput_1 = require("../inputs/IssueStatusCountOrderByAggregateInput");
const IssueStatusMaxOrderByAggregateInput_1 = require("../inputs/IssueStatusMaxOrderByAggregateInput");
const IssueStatusMinOrderByAggregateInput_1 = require("../inputs/IssueStatusMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IssueStatusOrderByWithAggregationInput = class IssueStatusOrderByWithAggregationInput {
};
exports.IssueStatusOrderByWithAggregationInput = IssueStatusOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusOrderByWithAggregationInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusOrderByWithAggregationInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssueStatusOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusCountOrderByAggregateInput_1.IssueStatusCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusCountOrderByAggregateInput_1.IssueStatusCountOrderByAggregateInput)
], IssueStatusOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusMaxOrderByAggregateInput_1.IssueStatusMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusMaxOrderByAggregateInput_1.IssueStatusMaxOrderByAggregateInput)
], IssueStatusOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatusMinOrderByAggregateInput_1.IssueStatusMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueStatusMinOrderByAggregateInput_1.IssueStatusMinOrderByAggregateInput)
], IssueStatusOrderByWithAggregationInput.prototype, "_min", void 0);
exports.IssueStatusOrderByWithAggregationInput = IssueStatusOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueStatusOrderByWithAggregationInput", {})
], IssueStatusOrderByWithAggregationInput);
