"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTaskDependencyArgs_1 = require("./args/DeleteOneTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const helpers_1 = require("../../../helpers");
let DeleteOneTaskDependencyResolver = class DeleteOneTaskDependencyResolver {
    async deleteOneTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneTaskDependencyResolver = DeleteOneTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTaskDependencyArgs_1.DeleteOneTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTaskDependencyResolver.prototype, "deleteOneTaskDependency", null);
exports.DeleteOneTaskDependencyResolver = DeleteOneTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], DeleteOneTaskDependencyResolver);
