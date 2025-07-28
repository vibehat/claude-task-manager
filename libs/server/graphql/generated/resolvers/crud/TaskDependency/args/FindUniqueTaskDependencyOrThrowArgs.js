"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaskDependencyOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskDependencyWhereUniqueInput_1 = require("../../../inputs/TaskDependencyWhereUniqueInput");
let FindUniqueTaskDependencyOrThrowArgs = class FindUniqueTaskDependencyOrThrowArgs {
};
exports.FindUniqueTaskDependencyOrThrowArgs = FindUniqueTaskDependencyOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskDependencyWhereUniqueInput_1.TaskDependencyWhereUniqueInput)
], FindUniqueTaskDependencyOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueTaskDependencyOrThrowArgs = FindUniqueTaskDependencyOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTaskDependencyOrThrowArgs);
