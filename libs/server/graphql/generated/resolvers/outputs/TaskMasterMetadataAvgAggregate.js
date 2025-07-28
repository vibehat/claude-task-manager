"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskMasterMetadataAvgAggregate = class TaskMasterMetadataAvgAggregate {
};
exports.TaskMasterMetadataAvgAggregate = TaskMasterMetadataAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataAvgAggregate.prototype, "id", void 0);
exports.TaskMasterMetadataAvgAggregate = TaskMasterMetadataAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskMasterMetadataAvgAggregate", {})
], TaskMasterMetadataAvgAggregate);
