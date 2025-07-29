"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTeamMemberArgs_1 = require("./args/UpdateManyTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTeamMemberResolver = class UpdateManyTeamMemberResolver {
    async updateManyTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTeamMemberResolver = UpdateManyTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTeamMemberArgs_1.UpdateManyTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTeamMemberResolver.prototype, "updateManyTeamMember", null);
exports.UpdateManyTeamMemberResolver = UpdateManyTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], UpdateManyTeamMemberResolver);
