"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TaskMasterMetadataOrderByWithRelationInput = class TaskMasterMetadataOrderByWithRelationInput {
};
exports.TaskMasterMetadataOrderByWithRelationInput = TaskMasterMetadataOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataOrderByWithRelationInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataOrderByWithRelationInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataOrderByWithRelationInput.prototype, "description", void 0);
exports.TaskMasterMetadataOrderByWithRelationInput = TaskMasterMetadataOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataOrderByWithRelationInput", {})
], TaskMasterMetadataOrderByWithRelationInput);
