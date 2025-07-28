"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySubtaskResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupBySubtaskArgs_1 = require("./args/GroupBySubtaskArgs");
const Subtask_1 = require("../../../models/Subtask");
const SubtaskGroupBy_1 = require("../../outputs/SubtaskGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySubtaskResolver = class GroupBySubtaskResolver {
    async groupBySubtask(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).subtask.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupBySubtaskResolver = GroupBySubtaskResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SubtaskGroupBy_1.SubtaskGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySubtaskArgs_1.GroupBySubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupBySubtaskResolver.prototype, "groupBySubtask", null);
exports.GroupBySubtaskResolver = GroupBySubtaskResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Subtask_1.Subtask)
], GroupBySubtaskResolver);
