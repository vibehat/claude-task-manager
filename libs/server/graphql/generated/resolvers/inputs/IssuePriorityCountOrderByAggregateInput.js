"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let IssuePriorityCountOrderByAggregateInput = class IssuePriorityCountOrderByAggregateInput {
};
exports.IssuePriorityCountOrderByAggregateInput = IssuePriorityCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCountOrderByAggregateInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCountOrderByAggregateInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityCountOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.IssuePriorityCountOrderByAggregateInput = IssuePriorityCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityCountOrderByAggregateInput", {})
], IssuePriorityCountOrderByAggregateInput);
