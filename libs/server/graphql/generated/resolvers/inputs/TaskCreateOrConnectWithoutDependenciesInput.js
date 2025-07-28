"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutDependenciesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutDependenciesInput_1 = require("../inputs/TaskCreateWithoutDependenciesInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutDependenciesInput = class TaskCreateOrConnectWithoutDependenciesInput {
};
exports.TaskCreateOrConnectWithoutDependenciesInput = TaskCreateOrConnectWithoutDependenciesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutDependenciesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutDependenciesInput_1.TaskCreateWithoutDependenciesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutDependenciesInput_1.TaskCreateWithoutDependenciesInput)
], TaskCreateOrConnectWithoutDependenciesInput.prototype, "create", void 0);
exports.TaskCreateOrConnectWithoutDependenciesInput = TaskCreateOrConnectWithoutDependenciesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutDependenciesInput", {})
], TaskCreateOrConnectWithoutDependenciesInput);
