"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneTaskDependencyArgs_1 = require("./args/UpsertOneTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const helpers_1 = require("../../../helpers");
let UpsertOneTaskDependencyResolver = class UpsertOneTaskDependencyResolver {
    async upsertOneTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneTaskDependencyResolver = UpsertOneTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TaskDependency_1.TaskDependency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTaskDependencyArgs_1.UpsertOneTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTaskDependencyResolver.prototype, "upsertOneTaskDependency", null);
exports.UpsertOneTaskDependencyResolver = UpsertOneTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], UpsertOneTaskDependencyResolver);
