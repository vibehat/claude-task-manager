"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Team_1 = require("../../../models/Team");
const TeamMember_1 = require("../../../models/TeamMember");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let TeamMemberRelationsResolver = class TeamMemberRelationsResolver {
    async team(teamMember, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.findUniqueOrThrow({
            where: {
                id: teamMember.id,
            },
        }).team({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async user(teamMember, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.findUniqueOrThrow({
            where: {
                id: teamMember.id,
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TeamMemberRelationsResolver = TeamMemberRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Team_1.Team, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TeamMember_1.TeamMember, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberRelationsResolver.prototype, "team", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TeamMember_1.TeamMember, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamMemberRelationsResolver.prototype, "user", null);
exports.TeamMemberRelationsResolver = TeamMemberRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], TeamMemberRelationsResolver);
