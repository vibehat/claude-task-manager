"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IssuePriorityMaxOrderByAggregateInput = class IssuePriorityMaxOrderByAggregateInput {
};
exports.IssuePriorityMaxOrderByAggregateInput = IssuePriorityMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMaxOrderByAggregateInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMaxOrderByAggregateInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.IssuePriorityMaxOrderByAggregateInput = IssuePriorityMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityMaxOrderByAggregateInput", {})
], IssuePriorityMaxOrderByAggregateInput);
