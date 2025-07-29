"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedOneWithoutDependentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutDependentsInput_1 = require("../inputs/TaskCreateOrConnectWithoutDependentsInput");
const TaskCreateWithoutDependentsInput_1 = require("../inputs/TaskCreateWithoutDependentsInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedOneWithoutDependentsInput = class TaskCreateNestedOneWithoutDependentsInput {
};
exports.TaskCreateNestedOneWithoutDependentsInput = TaskCreateNestedOneWithoutDependentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutDependentsInput_1.TaskCreateWithoutDependentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutDependentsInput_1.TaskCreateWithoutDependentsInput)
], TaskCreateNestedOneWithoutDependentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutDependentsInput_1.TaskCreateOrConnectWithoutDependentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutDependentsInput_1.TaskCreateOrConnectWithoutDependentsInput)
], TaskCreateNestedOneWithoutDependentsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateNestedOneWithoutDependentsInput.prototype, "connect", void 0);
exports.TaskCreateNestedOneWithoutDependentsInput = TaskCreateNestedOneWithoutDependentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedOneWithoutDependentsInput", {})
], TaskCreateNestedOneWithoutDependentsInput);
