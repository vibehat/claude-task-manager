"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTeamProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneTeamProjectArgs_1 = require("./args/UpdateOneTeamProjectArgs");
const TeamProject_1 = require("../../../models/TeamProject");
const helpers_1 = require("../../../helpers");
let UpdateOneTeamProjectResolver = class UpdateOneTeamProjectResolver {
    async updateOneTeamProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).teamProject.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneTeamProjectResolver = UpdateOneTeamProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TeamProject_1.TeamProject, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTeamProjectArgs_1.UpdateOneTeamProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTeamProjectResolver.prototype, "updateOneTeamProject", null);
exports.UpdateOneTeamProjectResolver = UpdateOneTeamProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TeamProject_1.TeamProject)
], UpdateOneTeamProjectResolver);
