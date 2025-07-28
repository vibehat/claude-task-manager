"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateManyTaskInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateManyTaskInput_1 = require("../inputs/TaskDependencyCreateManyTaskInput");
let TaskDependencyCreateManyTaskInputEnvelope = class TaskDependencyCreateManyTaskInputEnvelope {
};
exports.TaskDependencyCreateManyTaskInputEnvelope = TaskDependencyCreateManyTaskInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateManyTaskInput_1.TaskDependencyCreateManyTaskInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyCreateManyTaskInputEnvelope.prototype, "data", void 0);
exports.TaskDependencyCreateManyTaskInputEnvelope = TaskDependencyCreateManyTaskInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateManyTaskInputEnvelope", {})
], TaskDependencyCreateManyTaskInputEnvelope);
