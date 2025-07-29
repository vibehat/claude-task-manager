"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpdateOneWithoutIssuesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateOrConnectWithoutIssuesInput_1 = require("../inputs/TaskCreateOrConnectWithoutIssuesInput");
const TaskCreateWithoutIssuesInput_1 = require("../inputs/TaskCreateWithoutIssuesInput");
const TaskUpdateToOneWithWhereWithoutIssuesInput_1 = require("../inputs/TaskUpdateToOneWithWhereWithoutIssuesInput");
const TaskUpsertWithoutIssuesInput_1 = require("../inputs/TaskUpsertWithoutIssuesInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
const TaskWhereUniqueInput_1 = require("../inputs/TaskWhereUniqueInput");
let TaskUpdateOneWithoutIssuesNestedInput = class TaskUpdateOneWithoutIssuesNestedInput {
};
exports.TaskUpdateOneWithoutIssuesNestedInput = TaskUpdateOneWithoutIssuesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutIssuesInput_1.TaskCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutIssuesInput_1.TaskCreateWithoutIssuesInput)
], TaskUpdateOneWithoutIssuesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutIssuesInput_1.TaskCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskCreateOrConnectWithoutIssuesInput_1.TaskCreateOrConnectWithoutIssuesInput)
], TaskUpdateOneWithoutIssuesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpsertWithoutIssuesInput_1.TaskUpsertWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpsertWithoutIssuesInput_1.TaskUpsertWithoutIssuesInput)
], TaskUpdateOneWithoutIssuesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpdateOneWithoutIssuesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpdateOneWithoutIssuesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], TaskUpdateOneWithoutIssuesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateToOneWithWhereWithoutIssuesInput_1.TaskUpdateToOneWithWhereWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskUpdateToOneWithWhereWithoutIssuesInput_1.TaskUpdateToOneWithWhereWithoutIssuesInput)
], TaskUpdateOneWithoutIssuesNestedInput.prototype, "update", void 0);
exports.TaskUpdateOneWithoutIssuesNestedInput = TaskUpdateOneWithoutIssuesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpdateOneWithoutIssuesNestedInput", {})
], TaskUpdateOneWithoutIssuesNestedInput);
