"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCycleOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCycleOrThrowArgs_1 = require("./args/FindFirstCycleOrThrowArgs");
const Cycle_1 = require("../../../models/Cycle");
const helpers_1 = require("../../../helpers");
let FindFirstCycleOrThrowResolver = class FindFirstCycleOrThrowResolver {
    async findFirstCycleOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstCycleOrThrowResolver = FindFirstCycleOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCycleOrThrowArgs_1.FindFirstCycleOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCycleOrThrowResolver.prototype, "findFirstCycleOrThrow", null);
exports.FindFirstCycleOrThrowResolver = FindFirstCycleOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], FindFirstCycleOrThrowResolver);
