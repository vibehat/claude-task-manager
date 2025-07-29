"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskMasterMetadataMinOrderByAggregateInput = class TaskMasterMetadataMinOrderByAggregateInput {
};
exports.TaskMasterMetadataMinOrderByAggregateInput = TaskMasterMetadataMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMinOrderByAggregateInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMinOrderByAggregateInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMinOrderByAggregateInput.prototype, "description", void 0);
exports.TaskMasterMetadataMinOrderByAggregateInput = TaskMasterMetadataMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataMinOrderByAggregateInput", {})
], TaskMasterMetadataMinOrderByAggregateInput);
