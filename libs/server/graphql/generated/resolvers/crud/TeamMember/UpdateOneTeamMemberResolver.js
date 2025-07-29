"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneTeamMemberArgs_1 = require("./args/UpdateOneTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const helpers_1 = require("../../../helpers");
let UpdateOneTeamMemberResolver = class UpdateOneTeamMemberResolver {
    async updateOneTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneTeamMemberResolver = UpdateOneTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTeamMemberArgs_1.UpdateOneTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTeamMemberResolver.prototype, "updateOneTeamMember", null);
exports.UpdateOneTeamMemberResolver = UpdateOneTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], UpdateOneTeamMemberResolver);
