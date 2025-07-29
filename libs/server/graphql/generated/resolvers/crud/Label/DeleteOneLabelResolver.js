"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneLabelArgs_1 = require("./args/DeleteOneLabelArgs");
const Label_1 = require("../../../models/Label");
const helpers_1 = require("../../../helpers");
let DeleteOneLabelResolver = class DeleteOneLabelResolver {
    async deleteOneLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneLabelResolver = DeleteOneLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Label_1.Label, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneLabelArgs_1.DeleteOneLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneLabelResolver.prototype, "deleteOneLabel", null);
exports.DeleteOneLabelResolver = DeleteOneLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Label_1.Label)
], DeleteOneLabelResolver);
