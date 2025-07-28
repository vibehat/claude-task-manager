"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTeamResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTeamArgs_1 = require("./args/CreateOneTeamArgs");
const Team_1 = require("../../../models/Team");
const helpers_1 = require("../../../helpers");
let CreateOneTeamResolver = class CreateOneTeamResolver {
    async createOneTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneTeamResolver = CreateOneTeamResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Team_1.Team, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTeamArgs_1.CreateOneTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTeamResolver.prototype, "createOneTeam", null);
exports.CreateOneTeamResolver = CreateOneTeamResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], CreateOneTeamResolver);
