"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUpsertWithoutDependenciesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateWithoutDependenciesInput_1 = require("../inputs/TaskCreateWithoutDependenciesInput");
const TaskUpdateWithoutDependenciesInput_1 = require("../inputs/TaskUpdateWithoutDependenciesInput");
const TaskWhereInput_1 = require("../inputs/TaskWhereInput");
let TaskUpsertWithoutDependenciesInput = class TaskUpsertWithoutDependenciesInput {
};
exports.TaskUpsertWithoutDependenciesInput = TaskUpsertWithoutDependenciesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateWithoutDependenciesInput_1.TaskUpdateWithoutDependenciesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateWithoutDependenciesInput_1.TaskUpdateWithoutDependenciesInput)
], TaskUpsertWithoutDependenciesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateWithoutDependenciesInput_1.TaskCreateWithoutDependenciesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateWithoutDependenciesInput_1.TaskCreateWithoutDependenciesInput)
], TaskUpsertWithoutDependenciesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], TaskUpsertWithoutDependenciesInput.prototype, "where", void 0);
exports.TaskUpsertWithoutDependenciesInput = TaskUpsertWithoutDependenciesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskUpsertWithoutDependenciesInput", {})
], TaskUpsertWithoutDependenciesInput);
