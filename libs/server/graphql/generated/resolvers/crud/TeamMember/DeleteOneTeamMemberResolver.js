"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTeamMemberArgs_1 = require("./args/DeleteOneTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const helpers_1 = require("../../../helpers");
let DeleteOneTeamMemberResolver = class DeleteOneTeamMemberResolver {
    async deleteOneTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneTeamMemberResolver = DeleteOneTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTeamMemberArgs_1.DeleteOneTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTeamMemberResolver.prototype, "deleteOneTeamMember", null);
exports.DeleteOneTeamMemberResolver = DeleteOneTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], DeleteOneTeamMemberResolver);
