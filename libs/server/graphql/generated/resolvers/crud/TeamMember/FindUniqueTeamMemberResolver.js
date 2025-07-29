"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTeamMemberArgs_1 = require("./args/FindUniqueTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const helpers_1 = require("../../../helpers");
let FindUniqueTeamMemberResolver = class FindUniqueTeamMemberResolver {
    async teamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTeamMemberResolver = FindUniqueTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTeamMemberArgs_1.FindUniqueTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTeamMemberResolver.prototype, "teamMember", null);
exports.FindUniqueTeamMemberResolver = FindUniqueTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], FindUniqueTeamMemberResolver);
