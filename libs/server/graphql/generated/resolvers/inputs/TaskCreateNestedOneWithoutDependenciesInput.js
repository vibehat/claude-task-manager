"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedOneWithoutDependenciesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutDependenciesInput_1 = require("../inputs/TaskCreateOrConnectWithoutDependenciesInput");
const TaskCreateWithoutDependenciesInput_1 = require("../inputs/TaskCreateWithoutDependenciesInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedOneWithoutDependenciesInput = class TaskCreateNestedOneWithoutDependenciesInput {
};
exports.TaskCreateNestedOneWithoutDependenciesInput = TaskCreateNestedOneWithoutDependenciesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutDependenciesInput_1.TaskCreateWithoutDependenciesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutDependenciesInput_1.TaskCreateWithoutDependenciesInput)
], TaskCreateNestedOneWithoutDependenciesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutDependenciesInput_1.TaskCreateOrConnectWithoutDependenciesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutDependenciesInput_1.TaskCreateOrConnectWithoutDependenciesInput)
], TaskCreateNestedOneWithoutDependenciesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateNestedOneWithoutDependenciesInput.prototype, "connect", void 0);
exports.TaskCreateNestedOneWithoutDependenciesInput = TaskCreateNestedOneWithoutDependenciesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedOneWithoutDependenciesInput", {})
], TaskCreateNestedOneWithoutDependenciesInput);
