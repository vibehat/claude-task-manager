"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCycleArgs_1 = require("./args/DeleteOneCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const helpers_1 = require("../../../helpers");
let DeleteOneCycleResolver = class DeleteOneCycleResolver {
    async deleteOneCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneCycleResolver = DeleteOneCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCycleArgs_1.DeleteOneCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCycleResolver.prototype, "deleteOneCycle", null);
exports.DeleteOneCycleResolver = DeleteOneCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], DeleteOneCycleResolver);
