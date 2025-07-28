"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrConnectWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutIssuesInput_1 = require("../inputs/TaskCreateWithoutIssuesInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskCreateOrConnectWithoutIssuesInput = class TaskCreateOrConnectWithoutIssuesInput {
};
exports.TaskCreateOrConnectWithoutIssuesInput = TaskCreateOrConnectWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskCreateOrConnectWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutIssuesInput_1.TaskCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutIssuesInput_1.TaskCreateWithoutIssuesInput)
], TaskCreateOrConnectWithoutIssuesInput.prototype, "create", void 0);
exports.TaskCreateOrConnectWithoutIssuesInput = TaskCreateOrConnectWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskCreateOrConnectWithoutIssuesInput", {})
], TaskCreateOrConnectWithoutIssuesInput);
