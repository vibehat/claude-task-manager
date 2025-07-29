"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTeamResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnTeamArgs_1 = require("./args/CreateManyAndReturnTeamArgs");
const Team_1 = require("../../../models/Team");
const CreateManyAndReturnTeam_1 = require("../../outputs/CreateManyAndReturnTeam");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnTeamResolver = class CreateManyAndReturnTeamResolver {
    async createManyAndReturnTeam(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).team.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnTeamResolver = CreateManyAndReturnTeamResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeam_1.CreateManyAndReturnTeam], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTeamArgs_1.CreateManyAndReturnTeamArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnTeamResolver.prototype, "createManyAndReturnTeam", null);
exports.CreateManyAndReturnTeamResolver = CreateManyAndReturnTeamResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Team_1.Team)
], CreateManyAndReturnTeamResolver);
