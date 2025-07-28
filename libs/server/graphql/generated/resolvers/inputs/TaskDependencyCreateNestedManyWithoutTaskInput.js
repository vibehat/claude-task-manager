"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateNestedManyWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateManyTaskInputEnvelope_1 = require("../inputs/TaskDependencyCreateManyTaskInputEnvelope");
const TaskDependencyCreateOrConnectWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateOrConnectWithoutTaskInput");
const TaskDependencyCreateWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateWithoutTaskInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyCreateNestedManyWithoutTaskInput = class TaskDependencyCreateNestedManyWithoutTaskInput {
};
exports.TaskDependencyCreateNestedManyWithoutTaskInput = TaskDependencyCreateNestedManyWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateWithoutTaskInput_1.TaskDependencyCreateWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyCreateNestedManyWithoutTaskInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateOrConnectWithoutTaskInput_1.TaskDependencyCreateOrConnectWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyCreateNestedManyWithoutTaskInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateManyTaskInputEnvelope_1.TaskDependencyCreateManyTaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateManyTaskInputEnvelope_1.TaskDependencyCreateManyTaskInputEnvelope)
], TaskDependencyCreateNestedManyWithoutTaskInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyCreateNestedManyWithoutTaskInput.prototype, "connect", void 0);
exports.TaskDependencyCreateNestedManyWithoutTaskInput = TaskDependencyCreateNestedManyWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateNestedManyWithoutTaskInput", {})
], TaskDependencyCreateNestedManyWithoutTaskInput);
