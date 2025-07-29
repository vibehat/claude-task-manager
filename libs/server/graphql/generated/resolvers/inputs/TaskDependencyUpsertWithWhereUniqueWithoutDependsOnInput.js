"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateWithoutDependsOnInput_1 = require("../inputs/TaskDependencyCreateWithoutDependsOnInput");
const TaskDependencyUpdateWithoutDependsOnInput_1 = require("../inputs/TaskDependencyUpdateWithoutDependsOnInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput = class TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput {
};
exports.TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput = TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateWithoutDependsOnInput_1.TaskDependencyUpdateWithoutDependsOnInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateWithoutDependsOnInput_1.TaskDependencyUpdateWithoutDependsOnInput)
], TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateWithoutDependsOnInput_1.TaskDependencyCreateWithoutDependsOnInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateWithoutDependsOnInput_1.TaskDependencyCreateWithoutDependsOnInput)
], TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput.prototype, "create", void 0);
exports.TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput = TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput", {})
], TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput);
