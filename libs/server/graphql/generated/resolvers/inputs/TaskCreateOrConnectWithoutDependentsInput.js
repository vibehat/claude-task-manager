"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutDependentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutDependentsInput_1 = require("../inputs/TaskCreateWithoutDependentsInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutDependentsInput = class TaskCreateOrConnectWithoutDependentsInput {
};
exports.TaskCreateOrConnectWithoutDependentsInput = TaskCreateOrConnectWithoutDependentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutDependentsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutDependentsInput_1.TaskCreateWithoutDependentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutDependentsInput_1.TaskCreateWithoutDependentsInput)
], TaskCreateOrConnectWithoutDependentsInput.prototype, "create", void 0);
exports.TaskCreateOrConnectWithoutDependentsInput = TaskCreateOrConnectWithoutDependentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutDependentsInput", {})
], TaskCreateOrConnectWithoutDependentsInput);
