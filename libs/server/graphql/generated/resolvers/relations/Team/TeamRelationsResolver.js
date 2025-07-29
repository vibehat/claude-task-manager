"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cycle_1 = require("../../../models/Cycle");
const Team_1 = require("../../../models/Team");
const TeamMember_1 = require("../../../models/TeamMember");
const TeamProject_1 = require("../../../models/TeamProject");
const TeamCyclesArgs_1 = require("./args/TeamCyclesArgs");
const TeamMembersArgs_1 = require("./args/TeamMembersArgs");
const TeamProjectsArgs_1 = require("./args/TeamProjectsArgs");
const helpers_1 = require("../../../helpers");
let TeamRelationsResolver = class TeamRelationsResolver {
    async members(team, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findUniqueOrThrow({
            where: {
                id: team.id,
            },
        }).members({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async projects(team, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findUniqueOrThrow({
            where: {
                id: team.id,
            },
        }).projects({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async cycles(team, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.findUniqueOrThrow({
            where: {
                id: team.id,
            },
        }).cycles({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TeamRelationsResolver = TeamRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TeamMember_1.TeamMember], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Team_1.Team, Object, Object, TeamMembersArgs_1.TeamMembersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamRelationsResolver.prototype, "members", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [TeamProject_1.TeamProject], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Team_1.Team, Object, Object, TeamProjectsArgs_1.TeamProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamRelationsResolver.prototype, "projects", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Cycle_1.Cycle], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Team_1.Team, Object, Object, TeamCyclesArgs_1.TeamCyclesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TeamRelationsResolver.prototype, "cycles", null);
exports.TeamRelationsResolver = TeamRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], TeamRelationsResolver);
