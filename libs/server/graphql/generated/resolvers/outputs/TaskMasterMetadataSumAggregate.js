"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMasterMetadataSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TaskMasterMetadataSumAggregate = class TaskMasterMetadataSumAggregate {
};
exports.TaskMasterMetadataSumAggregate = TaskMasterMetadataSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TaskMasterMetadataSumAggregate.prototype, "id", void 0);
exports.TaskMasterMetadataSumAggregate = TaskMasterMetadataSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskMasterMetadataSumAggregate", {})
], TaskMasterMetadataSumAggregate);
