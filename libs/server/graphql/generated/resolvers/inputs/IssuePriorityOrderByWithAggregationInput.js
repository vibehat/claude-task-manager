"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityAvgOrderByAggregateInput_1 = require("../inputs/IssuePriorityAvgOrderByAggregateInput");
const IssuePriorityCountOrderByAggregateInput_1 = require("../inputs/IssuePriorityCountOrderByAggregateInput");
const IssuePriorityMaxOrderByAggregateInput_1 = require("../inputs/IssuePriorityMaxOrderByAggregateInput");
const IssuePriorityMinOrderByAggregateInput_1 = require("../inputs/IssuePriorityMinOrderByAggregateInput");
const IssuePrioritySumOrderByAggregateInput_1 = require("../inputs/IssuePrioritySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let IssuePriorityOrderByWithAggregationInput = class IssuePriorityOrderByWithAggregationInput {
};
exports.IssuePriorityOrderByWithAggregationInput = IssuePriorityOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityOrderByWithAggregationInput.prototype, "iconName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityOrderByWithAggregationInput.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], IssuePriorityOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityCountOrderByAggregateInput_1.IssuePriorityCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityCountOrderByAggregateInput_1.IssuePriorityCountOrderByAggregateInput)
], IssuePriorityOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityAvgOrderByAggregateInput_1.IssuePriorityAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityAvgOrderByAggregateInput_1.IssuePriorityAvgOrderByAggregateInput)
], IssuePriorityOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityMaxOrderByAggregateInput_1.IssuePriorityMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityMaxOrderByAggregateInput_1.IssuePriorityMaxOrderByAggregateInput)
], IssuePriorityOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityMinOrderByAggregateInput_1.IssuePriorityMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityMinOrderByAggregateInput_1.IssuePriorityMinOrderByAggregateInput)
], IssuePriorityOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePrioritySumOrderByAggregateInput_1.IssuePrioritySumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePrioritySumOrderByAggregateInput_1.IssuePrioritySumOrderByAggregateInput)
], IssuePriorityOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.IssuePriorityOrderByWithAggregationInput = IssuePriorityOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssuePriorityOrderByWithAggregationInput", {})
], IssuePriorityOrderByWithAggregationInput);
