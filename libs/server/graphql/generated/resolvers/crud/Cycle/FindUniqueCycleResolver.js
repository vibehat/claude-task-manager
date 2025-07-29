"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCycleArgs_1 = require("./args/FindUniqueCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const helpers_1 = require("../../../helpers");
let FindUniqueCycleResolver = class FindUniqueCycleResolver {
    async cycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueCycleResolver = FindUniqueCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCycleArgs_1.FindUniqueCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCycleResolver.prototype, "cycle", null);
exports.FindUniqueCycleResolver = FindUniqueCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], FindUniqueCycleResolver);
