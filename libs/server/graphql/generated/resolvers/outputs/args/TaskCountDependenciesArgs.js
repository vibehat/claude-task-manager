"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCountDependenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyWhereInput_1 = require("../../inputs/TaskDependencyWhereInput");
let TaskCountDependenciesArgs = class TaskCountDependenciesArgs {
};
exports.TaskCountDependenciesArgs = TaskCountDependenciesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereInput_1.TaskDependencyWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereInput_1.TaskDependencyWhereInput)
], TaskCountDependenciesArgs.prototype, "where", void 0);
exports.TaskCountDependenciesArgs = TaskCountDependenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TaskCountDependenciesArgs);
