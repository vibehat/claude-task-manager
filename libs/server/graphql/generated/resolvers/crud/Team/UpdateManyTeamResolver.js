"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTeamResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTeamArgs_1 = require("./args/UpdateManyTeamArgs");
const Team_1 = require("../../../models/Team");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTeamResolver = class UpdateManyTeamResolver {
    async updateManyTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTeamResolver = UpdateManyTeamResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTeamArgs_1.UpdateManyTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTeamResolver.prototype, "updateManyTeam", null);
exports.UpdateManyTeamResolver = UpdateManyTeamResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], UpdateManyTeamResolver);
