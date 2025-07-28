"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataAvgAggregate_1 = require("../outputs/TaskMasterMetadataAvgAggregate");
const TaskMasterMetadataCountAggregate_1 = require("../outputs/TaskMasterMetadataCountAggregate");
const TaskMasterMetadataMaxAggregate_1 = require("../outputs/TaskMasterMetadataMaxAggregate");
const TaskMasterMetadataMinAggregate_1 = require("../outputs/TaskMasterMetadataMinAggregate");
const TaskMasterMetadataSumAggregate_1 = require("../outputs/TaskMasterMetadataSumAggregate");
let TaskMasterMetadataGroupBy = class TaskMasterMetadataGroupBy {
};
exports.TaskMasterMetadataGroupBy = TaskMasterMetadataGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataGroupBy.prototype, "created", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TaskMasterMetadataGroupBy.prototype, "updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TaskMasterMetadataGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataCountAggregate_1.TaskMasterMetadataCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataCountAggregate_1.TaskMasterMetadataCountAggregate)
], TaskMasterMetadataGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataAvgAggregate_1.TaskMasterMetadataAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataAvgAggregate_1.TaskMasterMetadataAvgAggregate)
], TaskMasterMetadataGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataSumAggregate_1.TaskMasterMetadataSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataSumAggregate_1.TaskMasterMetadataSumAggregate)
], TaskMasterMetadataGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataMinAggregate_1.TaskMasterMetadataMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataMinAggregate_1.TaskMasterMetadataMinAggregate)
], TaskMasterMetadataGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataMaxAggregate_1.TaskMasterMetadataMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataMaxAggregate_1.TaskMasterMetadataMaxAggregate)
], TaskMasterMetadataGroupBy.prototype, "_max", void 0);
exports.TaskMasterMetadataGroupBy = TaskMasterMetadataGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskMasterMetadataGroupBy", {})
], TaskMasterMetadataGroupBy);
