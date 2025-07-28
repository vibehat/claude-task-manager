"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyTeamProjectArgs_1 = require("./args/CreateManyTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTeamProjectResolver = class CreateManyTeamProjectResolver {
    async createManyTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyTeamProjectResolver = CreateManyTeamProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTeamProjectArgs_1.CreateManyTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTeamProjectResolver.prototype, "createManyTeamProject", null);
exports.CreateManyTeamProjectResolver = CreateManyTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], CreateManyTeamProjectResolver);
