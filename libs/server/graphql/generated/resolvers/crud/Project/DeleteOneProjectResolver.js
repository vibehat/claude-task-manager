"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneProjectArgs_1 = require("./args/DeleteOneProjectArgs");
const Project_1 = require("../../../models/Project");
const helpers_1 = require("../../../helpers");
let DeleteOneProjectResolver = class DeleteOneProjectResolver {
    async deleteOneProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneProjectResolver = DeleteOneProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProjectArgs_1.DeleteOneProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneProjectResolver.prototype, "deleteOneProject", null);
exports.DeleteOneProjectResolver = DeleteOneProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], DeleteOneProjectResolver);
