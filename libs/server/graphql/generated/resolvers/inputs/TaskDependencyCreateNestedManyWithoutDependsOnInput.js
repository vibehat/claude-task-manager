"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyCreateNestedManyWithoutDependsOnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateManyDependsOnInputEnvelope_1 = require("../inputs/TaskDependencyCreateManyDependsOnInputEnvelope");
const TaskDependencyCreateOrConnectWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateOrConnectWithoutDependsOnInput");
const TaskDependencyCreateWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateWithoutDependsOnInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyCreateNestedManyWithoutDependsOnInput = class TaskDependencyCreateNestedManyWithoutDependsOnInput {
};
exports.TaskDependencyCreateNestedManyWithoutDependsOnInput = TaskDependencyCreateNestedManyWithoutDependsOnInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateWithoutDependsOnInput_1.TaskDependencyCreateWithoutDependsOnInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyCreateNestedManyWithoutDependsOnInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyCreateOrConnectWithoutDependsOnInput_1.TaskDependencyCreateOrConnectWithoutDependsOnInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyCreateNestedManyWithoutDependsOnInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateManyDependsOnInputEnvelope_1.TaskDependencyCreateManyDependsOnInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateManyDependsOnInputEnvelope_1.TaskDependencyCreateManyDependsOnInputEnvelope)
], TaskDependencyCreateNestedManyWithoutDependsOnInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TaskDependencyCreateNestedManyWithoutDependsOnInput.prototype, "connect", void 0);
exports.TaskDependencyCreateNestedManyWithoutDependsOnInput = TaskDependencyCreateNestedManyWithoutDependsOnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyCreateNestedManyWithoutDependsOnInput", {})
], TaskDependencyCreateNestedManyWithoutDependsOnInput);
