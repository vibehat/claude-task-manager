"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskMasterMetadataMaxOrderByAggregateInput = class TaskMasterMetadataMaxOrderByAggregateInput {
};
exports.TaskMasterMetadataMaxOrderByAggregateInput = TaskMasterMetadataMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMaxOrderByAggregateInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMaxOrderByAggregateInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMaxOrderByAggregateInput.prototype, "description", void 0);
exports.TaskMasterMetadataMaxOrderByAggregateInput = TaskMasterMetadataMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataMaxOrderByAggregateInput", {})
], TaskMasterMetadataMaxOrderByAggregateInput);
