"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnCycleResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnCycleArgs_1 = require("./args/CreateManyAndReturnCycleArgs");
const Cycle_1 = require("../../../models/Cycle");
const CreateManyAndReturnCycle_1 = require("../../outputs/CreateManyAndReturnCycle");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnCycleResolver = class CreateManyAndReturnCycleResolver {
    async createManyAndReturnCycle(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnCycleResolver = CreateManyAndReturnCycleResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCycle_1.CreateManyAndReturnCycle], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnCycleArgs_1.CreateManyAndReturnCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnCycleResolver.prototype, "createManyAndReturnCycle", null);
exports.CreateManyAndReturnCycleResolver = CreateManyAndReturnCycleResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], CreateManyAndReturnCycleResolver);
