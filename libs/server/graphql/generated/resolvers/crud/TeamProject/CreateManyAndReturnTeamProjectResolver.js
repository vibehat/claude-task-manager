"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnTeamProjectArgs_1 = require("./args/CreateManyAndReturnTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const CreateManyAndReturnTeamProject_1 = require("../../outputs/CreateManyAndReturnTeamProject");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnTeamProjectResolver = class CreateManyAndReturnTeamProjectResolver {
    async createManyAndReturnTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnTeamProjectResolver = CreateManyAndReturnTeamProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTeamProject_1.CreateManyAndReturnTeamProject], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnTeamProjectArgs_1.CreateManyAndReturnTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnTeamProjectResolver.prototype, "createManyAndReturnTeamProject", null);
exports.CreateManyAndReturnTeamProjectResolver = CreateManyAndReturnTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], CreateManyAndReturnTeamProjectResolver);
