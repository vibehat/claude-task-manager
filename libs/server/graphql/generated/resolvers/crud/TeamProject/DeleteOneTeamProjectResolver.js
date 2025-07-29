"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTeamProjectArgs_1 = require("./args/DeleteOneTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const helpers_1 = require("../../../helpers");
let DeleteOneTeamProjectResolver = class DeleteOneTeamProjectResolver {
    async deleteOneTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneTeamProjectResolver = DeleteOneTeamProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamProject_1.TeamProject, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTeamProjectArgs_1.DeleteOneTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTeamProjectResolver.prototype, "deleteOneTeamProject", null);
exports.DeleteOneTeamProjectResolver = DeleteOneTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], DeleteOneTeamProjectResolver);
