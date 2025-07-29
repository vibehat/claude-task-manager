"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskMasterMetadataCreateManyInput = class TaskMasterMetadataCreateManyInput {
};
exports.TaskMasterMetadataCreateManyInput = TaskMasterMetadataCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataCreateManyInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataCreateManyInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataCreateManyInput.prototype, "description", void 0);
exports.TaskMasterMetadataCreateManyInput = TaskMasterMetadataCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataCreateManyInput", {})
], TaskMasterMetadataCreateManyInput);
