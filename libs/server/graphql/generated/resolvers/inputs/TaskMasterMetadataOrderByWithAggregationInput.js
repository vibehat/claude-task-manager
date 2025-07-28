"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataAvgOrderByAggregateInput_1 = require("../inputs/TaskMasterMetadataAvgOrderByAggregateInput");
const TaskMasterMetadataCountOrderByAggregateInput_1 = require("../inputs/TaskMasterMetadataCountOrderByAggregateInput");
const TaskMasterMetadataMaxOrderByAggregateInput_1 = require("../inputs/TaskMasterMetadataMaxOrderByAggregateInput");
const TaskMasterMetadataMinOrderByAggregateInput_1 = require("../inputs/TaskMasterMetadataMinOrderByAggregateInput");
const TaskMasterMetadataSumOrderByAggregateInput_1 = require("../inputs/TaskMasterMetadataSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TaskMasterMetadataOrderByWithAggregationInput = class TaskMasterMetadataOrderByWithAggregationInput {
};
exports.TaskMasterMetadataOrderByWithAggregationInput = TaskMasterMetadataOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataOrderByWithAggregationInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataOrderByWithAggregationInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataCountOrderByAggregateInput_1.TaskMasterMetadataCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataCountOrderByAggregateInput_1.TaskMasterMetadataCountOrderByAggregateInput)
], TaskMasterMetadataOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataAvgOrderByAggregateInput_1.TaskMasterMetadataAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataAvgOrderByAggregateInput_1.TaskMasterMetadataAvgOrderByAggregateInput)
], TaskMasterMetadataOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataMaxOrderByAggregateInput_1.TaskMasterMetadataMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataMaxOrderByAggregateInput_1.TaskMasterMetadataMaxOrderByAggregateInput)
], TaskMasterMetadataOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataMinOrderByAggregateInput_1.TaskMasterMetadataMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataMinOrderByAggregateInput_1.TaskMasterMetadataMinOrderByAggregateInput)
], TaskMasterMetadataOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataSumOrderByAggregateInput_1.TaskMasterMetadataSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataSumOrderByAggregateInput_1.TaskMasterMetadataSumOrderByAggregateInput)
], TaskMasterMetadataOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.TaskMasterMetadataOrderByWithAggregationInput = TaskMasterMetadataOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataOrderByWithAggregationInput", {})
], TaskMasterMetadataOrderByWithAggregationInput);
