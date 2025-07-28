"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTaskDependencyOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTaskDependencyOrThrowArgs_1 = require("./args/FindUniqueTaskDependencyOrThrowArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const helpers_1 = require("../../../helpers");
let FindUniqueTaskDependencyOrThrowResolver = class FindUniqueTaskDependencyOrThrowResolver {
    async getTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTaskDependencyOrThrowResolver = FindUniqueTaskDependencyOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTaskDependencyOrThrowArgs_1.FindUniqueTaskDependencyOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTaskDependencyOrThrowResolver.prototype, "getTaskDependency", null);
exports.FindUniqueTaskDependencyOrThrowResolver = FindUniqueTaskDependencyOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], FindUniqueTaskDependencyOrThrowResolver);
