"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTeamMemberArgs_1 = require("./args/CreateOneTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const helpers_1 = require("../../../helpers");
let CreateOneTeamMemberResolver = class CreateOneTeamMemberResolver {
    async createOneTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneTeamMemberResolver = CreateOneTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamMember_1.TeamMember, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTeamMemberArgs_1.CreateOneTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTeamMemberResolver.prototype, "createOneTeamMember", null);
exports.CreateOneTeamMemberResolver = CreateOneTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], CreateOneTeamMemberResolver);
