"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateToOneWithWhereWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateWithoutIssuesInput_1 = require("../inputs/TaskUpdateWithoutIssuesInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpdateToOneWithWhereWithoutIssuesInput = class TaskUpdateToOneWithWhereWithoutIssuesInput {
};
exports.TaskUpdateToOneWithWhereWithoutIssuesInput = TaskUpdateToOneWithWhereWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpdateToOneWithWhereWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutIssuesInput_1.TaskUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutIssuesInput_1.TaskUpdateWithoutIssuesInput)
], TaskUpdateToOneWithWhereWithoutIssuesInput.prototype, "data", void 0);
exports.TaskUpdateToOneWithWhereWithoutIssuesInput = TaskUpdateToOneWithWhereWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateToOneWithWhereWithoutIssuesInput", {})
], TaskUpdateToOneWithWhereWithoutIssuesInput);
