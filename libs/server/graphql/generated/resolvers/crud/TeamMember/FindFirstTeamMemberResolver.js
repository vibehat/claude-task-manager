"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTeamMemberArgs_1 = require("./args/FindFirstTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const helpers_1 = require("../../../helpers");
let FindFirstTeamMemberResolver = class FindFirstTeamMemberResolver {
    async findFirstTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTeamMemberResolver = FindFirstTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TeamMember_1.TeamMember, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTeamMemberArgs_1.FindFirstTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTeamMemberResolver.prototype, "findFirstTeamMember", null);
exports.FindFirstTeamMemberResolver = FindFirstTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], FindFirstTeamMemberResolver);
