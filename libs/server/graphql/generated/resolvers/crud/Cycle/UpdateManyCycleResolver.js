"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCycleArgs_1 = require("./args/UpdateManyCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCycleResolver = class UpdateManyCycleResolver {
    async updateManyCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyCycleResolver = UpdateManyCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCycleArgs_1.UpdateManyCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCycleResolver.prototype, "updateManyCycle", null);
exports.UpdateManyCycleResolver = UpdateManyCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], UpdateManyCycleResolver);
