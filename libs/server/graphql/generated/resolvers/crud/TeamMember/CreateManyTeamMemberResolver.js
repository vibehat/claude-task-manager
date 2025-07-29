"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyTeamMemberArgs_1 = require("./args/CreateManyTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTeamMemberResolver = class CreateManyTeamMemberResolver {
    async createManyTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyTeamMemberResolver = CreateManyTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTeamMemberArgs_1.CreateManyTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTeamMemberResolver.prototype, "createManyTeamMember", null);
exports.CreateManyTeamMemberResolver = CreateManyTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], CreateManyTeamMemberResolver);
