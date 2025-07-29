"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTeamResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneTeamArgs_1 = require("./args/UpdateOneTeamArgs");
const Team_1 = require("../../../models/Team");
const helpers_1 = require("../../../helpers");
let UpdateOneTeamResolver = class UpdateOneTeamResolver {
    async updateOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneTeamResolver = UpdateOneTeamResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Team_1.Team, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTeamArgs_1.UpdateOneTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTeamResolver.prototype, "updateOneTeam", null);
exports.UpdateOneTeamResolver = UpdateOneTeamResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], UpdateOneTeamResolver);
