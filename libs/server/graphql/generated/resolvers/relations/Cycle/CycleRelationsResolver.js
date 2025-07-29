"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cycle_1 = require("../../../models/Cycle");
const Issue_1 = require("../../../models/Issue");
const Team_1 = require("../../../models/Team");
const CycleIssuesArgs_1 = require("./args/CycleIssuesArgs");
const helpers_1 = require("../../../helpers");
let CycleRelationsResolver = class CycleRelationsResolver {
    async team(cycle, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findUniqueOrThrow({
            where: {
                id: cycle.id,
            },
        }).team({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issues(cycle, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).cycle.findUniqueOrThrow({
            where: {
                id: cycle.id,
            },
        }).issues({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CycleRelationsResolver = CycleRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Team_1.Team, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cycle_1.Cycle, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleRelationsResolver.prototype, "team", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Issue_1.Issue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Cycle_1.Cycle, Object, Object, CycleIssuesArgs_1.CycleIssuesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CycleRelationsResolver.prototype, "issues", null);
exports.CycleRelationsResolver = CycleRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Cycle_1.Cycle)
], CycleRelationsResolver);
