"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateManyDependsOnInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateManyDependsOnInput_1 = require("../inputs/TaskDependencyCreateManyDependsOnInput");
let TaskDependencyCreateManyDependsOnInputEnvelope = class TaskDependencyCreateManyDependsOnInputEnvelope {
};
exports.TaskDependencyCreateManyDependsOnInputEnvelope = TaskDependencyCreateManyDependsOnInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateManyDependsOnInput_1.TaskDependencyCreateManyDependsOnInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyCreateManyDependsOnInputEnvelope.prototype, "data", void 0);
exports.TaskDependencyCreateManyDependsOnInputEnvelope = TaskDependencyCreateManyDependsOnInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateManyDependsOnInputEnvelope", {})
], TaskDependencyCreateManyDependsOnInputEnvelope);
