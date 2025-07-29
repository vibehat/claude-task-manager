"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTaskArgs_1 = require("./args/GroupByTaskArgs");
const Task_1 = require("../../../models/Task");
const TaskGroupBy_1 = require("../../outputs/TaskGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTaskResolver = class GroupByTaskResolver {
    async groupByTask(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).task.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByTaskResolver = GroupByTaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TaskGroupBy_1.TaskGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTaskArgs_1.GroupByTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTaskResolver.prototype, "groupByTask", null);
exports.GroupByTaskResolver = GroupByTaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Task_1.Task)
], GroupByTaskResolver);
