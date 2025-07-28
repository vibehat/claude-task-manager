"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskMasterMetadataMaxAggregate = class TaskMasterMetadataMaxAggregate {
};
exports.TaskMasterMetadataMaxAggregate = TaskMasterMetadataMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataMaxAggregate.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataMaxAggregate.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataMaxAggregate.prototype, "description", void 0);
exports.TaskMasterMetadataMaxAggregate = TaskMasterMetadataMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskMasterMetadataMaxAggregate", {})
], TaskMasterMetadataMaxAggregate);
