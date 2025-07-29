"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyCycleArgs_1 = require("./args/CreateManyCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyCycleResolver = class CreateManyCycleResolver {
    async createManyCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyCycleResolver = CreateManyCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCycleArgs_1.CreateManyCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyCycleResolver.prototype, "createManyCycle", null);
exports.CreateManyCycleResolver = CreateManyCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], CreateManyCycleResolver);
