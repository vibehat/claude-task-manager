"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyUpsertWithWhereUniqueWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyCreateWithoutTaskInput_1 = require("../inputs/TaskDependencyCreateWithoutTaskInput");
const TaskDependencyUpdateWithoutTaskInput_1 = require("../inputs/TaskDependencyUpdateWithoutTaskInput");
const TaskDependencyWhereUniqueInput_1 = require("../inputs/TaskDependencyWhereUniqueInput");
let TaskDependencyUpsertWithWhereUniqueWithoutTaskInput = class TaskDependencyUpsertWithWhereUniqueWithoutTaskInput {
};
exports.TaskDependencyUpsertWithWhereUniqueWithoutTaskInput = TaskDependencyUpsertWithWhereUniqueWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], TaskDependencyUpsertWithWhereUniqueWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyUpdateWithoutTaskInput_1.TaskDependencyUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyUpdateWithoutTaskInput_1.TaskDependencyUpdateWithoutTaskInput)
], TaskDependencyUpsertWithWhereUniqueWithoutTaskInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyCreateWithoutTaskInput_1.TaskDependencyCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyCreateWithoutTaskInput_1.TaskDependencyCreateWithoutTaskInput)
], TaskDependencyUpsertWithWhereUniqueWithoutTaskInput.prototype, "create", void 0);
exports.TaskDependencyUpsertWithWhereUniqueWithoutTaskInput = TaskDependencyUpsertWithWhereUniqueWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaskDependencyUpsertWithWhereUniqueWithoutTaskInput", {})
], TaskDependencyUpsertWithWhereUniqueWithoutTaskInput);
