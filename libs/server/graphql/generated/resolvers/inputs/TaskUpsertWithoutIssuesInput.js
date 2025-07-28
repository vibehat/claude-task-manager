"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutIssuesInput_1 = require("../inputs/TaskCreateWithoutIssuesInput");
const TaskUpdateWithoutIssuesInput_1 = require("../inputs/TaskUpdateWithoutIssuesInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpsertWithoutIssuesInput = class TaskUpsertWithoutIssuesInput {
};
exports.TaskUpsertWithoutIssuesInput = TaskUpsertWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutIssuesInput_1.TaskUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutIssuesInput_1.TaskUpdateWithoutIssuesInput)
], TaskUpsertWithoutIssuesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutIssuesInput_1.TaskCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutIssuesInput_1.TaskCreateWithoutIssuesInput)
], TaskUpsertWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpsertWithoutIssuesInput.prototype, "where", void 0);
exports.TaskUpsertWithoutIssuesInput = TaskUpsertWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithoutIssuesInput", {})
], TaskUpsertWithoutIssuesInput);
