"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyUpdateWithoutDependsOnInput_1 = require("../inputs/TaskDependencyUpdateWithoutDependsOnInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput = class TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput {
};
exports.TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput = TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateWithoutDependsOnInput_1.TaskDependencyUpdateWithoutDependsOnInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateWithoutDependsOnInput_1.TaskDependencyUpdateWithoutDependsOnInput)
], TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput.prototype, "data", void 0);
exports.TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput = TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput", {})
], TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput);
