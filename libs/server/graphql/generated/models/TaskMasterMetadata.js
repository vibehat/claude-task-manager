"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadata = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskMasterMetadata = class TaskMasterMetadata {
};
exports.TaskMasterMetadata = TaskMasterMetadata;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadata.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadata.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadata.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadata.prototype, "description", void 0);
exports.TaskMasterMetadata = TaskMasterMetadata = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskMasterMetadata", {})
], TaskMasterMetadata);
