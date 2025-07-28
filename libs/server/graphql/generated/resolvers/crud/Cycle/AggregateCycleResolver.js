"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCycleArgs_1 = require("./args/AggregateCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const AggregateCycle_1 = require("../../outputs/AggregateCycle");
const helpers_1 = require("../../../helpers");
let AggregateCycleResolver = class AggregateCycleResolver {
    async aggregateCycle(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateCycleResolver = AggregateCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCycle_1.AggregateCycle, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCycleArgs_1.AggregateCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCycleResolver.prototype, "aggregateCycle", null);
exports.AggregateCycleResolver = AggregateCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], AggregateCycleResolver);
