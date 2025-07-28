"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTaskDependencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTaskDependencyArgs_1 = require("./args/GroupByTaskDependencyArgs");
const TaskDependency_1 = require("../../../models/TaskDependency");
const TaskDependencyGroupBy_1 = require("../../outputs/TaskDependencyGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTaskDependencyResolver = class GroupByTaskDependencyResolver {
    async groupByTaskDependency(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).taskDependency.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByTaskDependencyResolver = GroupByTaskDependencyResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TaskDependencyGroupBy_1.TaskDependencyGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTaskDependencyArgs_1.GroupByTaskDependencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTaskDependencyResolver.prototype, "groupByTaskDependency", null);
exports.GroupByTaskDependencyResolver = GroupByTaskDependencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TaskDependency_1.TaskDependency)
], GroupByTaskDependencyResolver);
