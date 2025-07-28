"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyLabelArgs_1 = require("./args/DeleteManyLabelArgs");
const Label_1 = require("../../../models/Label");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyLabelResolver = class DeleteManyLabelResolver {
    async deleteManyLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyLabelResolver = DeleteManyLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLabelArgs_1.DeleteManyLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyLabelResolver.prototype, "deleteManyLabel", null);
exports.DeleteManyLabelResolver = DeleteManyLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Label_1.Label)
], DeleteManyLabelResolver);
