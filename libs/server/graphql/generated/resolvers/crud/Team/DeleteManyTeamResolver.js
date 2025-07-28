"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTeamResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyTeamArgs_1 = require("./args/DeleteManyTeamArgs");
const Team_1 = require("../../../models/Team");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTeamResolver = class DeleteManyTeamResolver {
    async deleteManyTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyTeamResolver = DeleteManyTeamResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTeamArgs_1.DeleteManyTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTeamResolver.prototype, "deleteManyTeam", null);
exports.DeleteManyTeamResolver = DeleteManyTeamResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], DeleteManyTeamResolver);
