"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTaskDependencyArgs_1 = require("./args/FindFirstTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const helpers_1 = require("../../../helpers");
let FindFirstTaskDependencyResolver = class FindFirstTaskDependencyResolver {
    async findFirstTaskDependency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTaskDependencyResolver = FindFirstTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TaskDependency_1.TaskDependency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTaskDependencyArgs_1.FindFirstTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTaskDependencyResolver.prototype, "findFirstTaskDependency", null);
exports.FindFirstTaskDependencyResolver = FindFirstTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], FindFirstTaskDependencyResolver);
