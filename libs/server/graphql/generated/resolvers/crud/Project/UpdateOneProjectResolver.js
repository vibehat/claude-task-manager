"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneProjectArgs_1 = require("./args/UpdateOneProjectArgs");
const Project_1 = require("../../../models/Project");
const helpers_1 = require("../../../helpers");
let UpdateOneProjectResolver = class UpdateOneProjectResolver {
    async updateOneProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneProjectResolver = UpdateOneProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProjectArgs_1.UpdateOneProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneProjectResolver.prototype, "updateOneProject", null);
exports.UpdateOneProjectResolver = UpdateOneProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], UpdateOneProjectResolver);
