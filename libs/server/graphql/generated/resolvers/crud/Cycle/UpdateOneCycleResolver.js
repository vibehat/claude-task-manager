"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneCycleArgs_1 = require("./args/UpdateOneCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const helpers_1 = require("../../../helpers");
let UpdateOneCycleResolver = class UpdateOneCycleResolver {
    async updateOneCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneCycleResolver = UpdateOneCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCycleArgs_1.UpdateOneCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCycleResolver.prototype, "updateOneCycle", null);
exports.UpdateOneCycleResolver = UpdateOneCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], UpdateOneCycleResolver);
