"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyTeamProjectArgs_1 = require("./args/DeleteManyTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTeamProjectResolver = class DeleteManyTeamProjectResolver {
    async deleteManyTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyTeamProjectResolver = DeleteManyTeamProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTeamProjectArgs_1.DeleteManyTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTeamProjectResolver.prototype, "deleteManyTeamProject", null);
exports.DeleteManyTeamProjectResolver = DeleteManyTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], DeleteManyTeamProjectResolver);
