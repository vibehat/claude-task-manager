"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskMasterMetadataCountOrderByAggregateInput = class TaskMasterMetadataCountOrderByAggregateInput {
};
exports.TaskMasterMetadataCountOrderByAggregateInput = TaskMasterMetadataCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataCountOrderByAggregateInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataCountOrderByAggregateInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataCountOrderByAggregateInput.prototype, "description", void 0);
exports.TaskMasterMetadataCountOrderByAggregateInput = TaskMasterMetadataCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataCountOrderByAggregateInput", {})
], TaskMasterMetadataCountOrderByAggregateInput);
