"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Issue_1 = require("../../../models/Issue");
const Subtask_1 = require("../../../models/Subtask");
const Task_1 = require("../../../models/Task");
const TaskDependency_1 = require("../../../models/TaskDependency");
const TaskDependenciesArgs_1 = require("./args/TaskDependenciesArgs");
const TaskDependentsArgs_1 = require("./args/TaskDependentsArgs");
const TaskIssuesArgs_1 = require("./args/TaskIssuesArgs");
const TaskSubtasksArgs_1 = require("./args/TaskSubtasksArgs");
const helpers_1 = require("../../../helpers");
let TaskRelationsResolver = class TaskRelationsResolver {
    async subtasks(task, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUniqueOrThrow({
            where: {
                id: task.id,
            },
        }).subtasks({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dependencies(task, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUniqueOrThrow({
            where: {
                id: task.id,
            },
        }).dependencies({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dependents(task, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUniqueOrThrow({
            where: {
                id: task.id,
            },
        }).dependents({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issues(task, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.findUniqueOrThrow({
            where: {
                id: task.id,
            },
        }).issues({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TaskRelationsResolver = TaskRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Subtask_1.Subtask], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object, Object, TaskSubtasksArgs_1.TaskSubtasksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "subtasks", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TaskDependency_1.TaskDependency], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object, Object, TaskDependenciesArgs_1.TaskDependenciesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "dependencies", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TaskDependency_1.TaskDependency], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object, Object, TaskDependentsArgs_1.TaskDependentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "dependents", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Issue_1.Issue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Task_1.Task, Object, Object, TaskIssuesArgs_1.TaskIssuesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskRelationsResolver.prototype, "issues", null);
exports.TaskRelationsResolver = TaskRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], TaskRelationsResolver);
