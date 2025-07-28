"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDependencyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Task_1 = require("../../../models/Task");
const TaskDependency_1 = require("../../../models/TaskDependency");
const helpers_1 = require("../../../helpers");
let TaskDependencyRelationsResolver = class TaskDependencyRelationsResolver {
    async task(taskDependency, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.findUniqueOrThrow({
            where: {
                id: taskDependency.id,
            },
        }).task({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async dependsOn(taskDependency, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.findUniqueOrThrow({
            where: {
                id: taskDependency.id,
            },
        }).dependsOn({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TaskDependencyRelationsResolver = TaskDependencyRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Task_1.Task, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TaskDependency_1.TaskDependency, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyRelationsResolver.prototype, "task", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Task_1.Task, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TaskDependency_1.TaskDependency, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDependencyRelationsResolver.prototype, "dependsOn", null);
exports.TaskDependencyRelationsResolver = TaskDependencyRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], TaskDependencyRelationsResolver);
