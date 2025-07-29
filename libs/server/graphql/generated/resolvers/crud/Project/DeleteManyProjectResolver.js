"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProjectResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyProjectArgs_1 = require("./args/DeleteManyProjectArgs");
const Project_1 = require("../../../models/Project");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyProjectResolver = class DeleteManyProjectResolver {
    async deleteManyProject(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).project.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyProjectResolver = DeleteManyProjectResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProjectArgs_1.DeleteManyProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyProjectResolver.prototype, "deleteManyProject", null);
exports.DeleteManyProjectResolver = DeleteManyProjectResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_1.Project)
], DeleteManyProjectResolver);
