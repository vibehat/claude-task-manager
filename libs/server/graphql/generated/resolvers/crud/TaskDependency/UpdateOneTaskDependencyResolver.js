"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneTaskDependencyArgs_1 = require("./args/UpdateOneTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const helpers_1 = require("../../../helpers");
let UpdateOneTaskDependencyResolver = class UpdateOneTaskDependencyResolver {
    async updateOneTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneTaskDependencyResolver = UpdateOneTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTaskDependencyArgs_1.UpdateOneTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTaskDependencyResolver.prototype, "updateOneTaskDependency", null);
exports.UpdateOneTaskDependencyResolver = UpdateOneTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], UpdateOneTaskDependencyResolver);
