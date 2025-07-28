"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTeamProjectArgs_1 = require("./args/UpdateManyTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTeamProjectResolver = class UpdateManyTeamProjectResolver {
    async updateManyTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTeamProjectResolver = UpdateManyTeamProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTeamProjectArgs_1.UpdateManyTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTeamProjectResolver.prototype, "updateManyTeamProject", null);
exports.UpdateManyTeamProjectResolver = UpdateManyTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], UpdateManyTeamProjectResolver);
