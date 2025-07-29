"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTeamMemberResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnTeamMemberArgs_1 = require("./args/CreateManyAndReturnTeamMemberArgs");
const TeamMember_1 = require("../../../models/TeamMember");
const CreateManyAndReturnTeamMember_1 = require("../../outputs/CreateManyAndReturnTeamMember");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnTeamMemberResolver = class CreateManyAndReturnTeamMemberResolver {
    async createManyAndReturnTeamMember(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamMember.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnTeamMemberResolver = CreateManyAndReturnTeamMemberResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeamMember_1.CreateManyAndReturnTeamMember], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTeamMemberArgs_1.CreateManyAndReturnTeamMemberArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnTeamMemberResolver.prototype, "createManyAndReturnTeamMember", null);
exports.CreateManyAndReturnTeamMemberResolver = CreateManyAndReturnTeamMemberResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamMember_1.TeamMember)
], CreateManyAndReturnTeamMemberResolver);
