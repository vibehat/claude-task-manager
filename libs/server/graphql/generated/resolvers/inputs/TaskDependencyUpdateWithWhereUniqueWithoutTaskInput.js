"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpdateWithWhereUniqueWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyUpdateWithoutTaskInput_1 = require("../inputs/TaskDependencyUpdateWithoutTaskInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyUpdateWithWhereUniqueWithoutTaskInput = class TaskDependencyUpdateWithWhereUniqueWithoutTaskInput {
};
exports.TaskDependencyUpdateWithWhereUniqueWithoutTaskInput = TaskDependencyUpdateWithWhereUniqueWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], TaskDependencyUpdateWithWhereUniqueWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateWithoutTaskInput_1.TaskDependencyUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateWithoutTaskInput_1.TaskDependencyUpdateWithoutTaskInput)
], TaskDependencyUpdateWithWhereUniqueWithoutTaskInput.prototype, "data", void 0);
exports.TaskDependencyUpdateWithWhereUniqueWithoutTaskInput = TaskDependencyUpdateWithWhereUniqueWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpdateWithWhereUniqueWithoutTaskInput", {})
], TaskDependencyUpdateWithWhereUniqueWithoutTaskInput);
