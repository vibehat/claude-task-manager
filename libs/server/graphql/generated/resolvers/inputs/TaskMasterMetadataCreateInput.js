"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskMasterMetadataCreateInput = class TaskMasterMetadataCreateInput {
};
exports.TaskMasterMetadataCreateInput = TaskMasterMetadataCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataCreateInput.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataCreateInput.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataCreateInput.prototype, "description", void 0);
exports.TaskMasterMetadataCreateInput = TaskMasterMetadataCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskMasterMetadataCreateInput", {})
], TaskMasterMetadataCreateInput);
