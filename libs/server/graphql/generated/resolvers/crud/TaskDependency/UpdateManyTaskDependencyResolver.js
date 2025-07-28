"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTaskDependencyArgs_1 = require("./args/UpdateManyTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTaskDependencyResolver = class UpdateManyTaskDependencyResolver {
    async updateManyTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTaskDependencyResolver = UpdateManyTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTaskDependencyArgs_1.UpdateManyTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTaskDependencyResolver.prototype, "updateManyTaskDependency", null);
exports.UpdateManyTaskDependencyResolver = UpdateManyTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], UpdateManyTaskDependencyResolver);
