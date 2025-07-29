"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithoutDependentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutDependentsInput_1 = require("../inputs/TaskCreateWithoutDependentsInput");
const TaskUpdateWithoutDependentsInput_1 = require("../inputs/TaskUpdateWithoutDependentsInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpsertWithoutDependentsInput = class TaskUpsertWithoutDependentsInput {
};
exports.TaskUpsertWithoutDependentsInput = TaskUpsertWithoutDependentsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutDependentsInput_1.TaskUpdateWithoutDependentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutDependentsInput_1.TaskUpdateWithoutDependentsInput)
], TaskUpsertWithoutDependentsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutDependentsInput_1.TaskCreateWithoutDependentsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutDependentsInput_1.TaskCreateWithoutDependentsInput)
], TaskUpsertWithoutDependentsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpsertWithoutDependentsInput.prototype, "where", void 0);
exports.TaskUpsertWithoutDependentsInput = TaskUpsertWithoutDependentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithoutDependentsInput", {})
], TaskUpsertWithoutDependentsInput);
