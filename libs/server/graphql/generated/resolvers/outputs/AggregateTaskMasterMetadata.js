"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTaskMasterMetadata = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskMasterMetadataAvgAggregate_1 = require("../outputs/TaskMasterMetadataAvgAggregate");
const TaskMasterMetadataCountAggregate_1 = require("../outputs/TaskMasterMetadataCountAggregate");
const TaskMasterMetadataMaxAggregate_1 = require("../outputs/TaskMasterMetadataMaxAggregate");
const TaskMasterMetadataMinAggregate_1 = require("../outputs/TaskMasterMetadataMinAggregate");
const TaskMasterMetadataSumAggregate_1 = require("../outputs/TaskMasterMetadataSumAggregate");
let AggregateTaskMasterMetadata = class AggregateTaskMasterMetadata {
};
exports.AggregateTaskMasterMetadata = AggregateTaskMasterMetadata;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataCountAggregate_1.TaskMasterMetadataCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataCountAggregate_1.TaskMasterMetadataCountAggregate)
], AggregateTaskMasterMetadata.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataAvgAggregate_1.TaskMasterMetadataAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataAvgAggregate_1.TaskMasterMetadataAvgAggregate)
], AggregateTaskMasterMetadata.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataSumAggregate_1.TaskMasterMetadataSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataSumAggregate_1.TaskMasterMetadataSumAggregate)
], AggregateTaskMasterMetadata.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataMinAggregate_1.TaskMasterMetadataMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataMinAggregate_1.TaskMasterMetadataMinAggregate)
], AggregateTaskMasterMetadata.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskMasterMetadataMaxAggregate_1.TaskMasterMetadataMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskMasterMetadataMaxAggregate_1.TaskMasterMetadataMaxAggregate)
], AggregateTaskMasterMetadata.prototype, "_max", void 0);
exports.AggregateTaskMasterMetadata = AggregateTaskMasterMetadata = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTaskMasterMetadata", {})
], AggregateTaskMasterMetadata);
