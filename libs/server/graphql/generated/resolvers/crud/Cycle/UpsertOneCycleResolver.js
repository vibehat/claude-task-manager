"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCycleArgs_1 = require("./args/UpsertOneCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const helpers_1 = require("../../../helpers");
let UpsertOneCycleResolver = class UpsertOneCycleResolver {
    async upsertOneCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneCycleResolver = UpsertOneCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cycle_1.Cycle, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCycleArgs_1.UpsertOneCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneCycleResolver.prototype, "upsertOneCycle", null);
exports.UpsertOneCycleResolver = UpsertOneCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], UpsertOneCycleResolver);
