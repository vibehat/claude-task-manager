"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateNestedOneWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutIssuesInput_1 = require("../inputs/TaskCreateOrConnectWithoutIssuesInput");
const TaskCreateWithoutIssuesInput_1 = require("../inputs/TaskCreateWithoutIssuesInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateNestedOneWithoutIssuesInput = class TaskCreateNestedOneWithoutIssuesInput {
};
exports.TaskCreateNestedOneWithoutIssuesInput = TaskCreateNestedOneWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutIssuesInput_1.TaskCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutIssuesInput_1.TaskCreateWithoutIssuesInput)
], TaskCreateNestedOneWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutIssuesInput_1.TaskCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutIssuesInput_1.TaskCreateOrConnectWithoutIssuesInput)
], TaskCreateNestedOneWithoutIssuesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateNestedOneWithoutIssuesInput.prototype, "connect", void 0);
exports.TaskCreateNestedOneWithoutIssuesInput = TaskCreateNestedOneWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateNestedOneWithoutIssuesInput", {})
], TaskCreateNestedOneWithoutIssuesInput);
