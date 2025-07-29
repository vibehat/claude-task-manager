"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCycleArgs_1 = require("./args/GroupByCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const CycleGroupBy_1 = require("../../outputs/CycleGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCycleResolver = class GroupByCycleResolver {
    async groupByCycle(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
exports.GroupByCycleResolver = GroupByCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CycleGroupBy_1.CycleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCycleArgs_1.GroupByCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCycleResolver.prototype, "groupByCycle", null);
exports.GroupByCycleResolver = GroupByCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], GroupByCycleResolver);
