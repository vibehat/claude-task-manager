"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateOrConnectWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateWithoutTaskInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyCreateOrConnectWithoutTaskInput = class TaskDependencyCreateOrConnectWithoutTaskInput {
};
exports.TaskDependencyCreateOrConnectWithoutTaskInput = TaskDependencyCreateOrConnectWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], TaskDependencyCreateOrConnectWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateWithoutTaskInput_1.TaskDependencyCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateWithoutTaskInput_1.TaskDependencyCreateWithoutTaskInput)
], TaskDependencyCreateOrConnectWithoutTaskInput.prototype, "create", void 0);
exports.TaskDependencyCreateOrConnectWithoutTaskInput = TaskDependencyCreateOrConnectWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateOrConnectWithoutTaskInput", {})
], TaskDependencyCreateOrConnectWithoutTaskInput);
