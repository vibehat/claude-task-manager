"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneLabelArgs_1 = require("./args/UpdateOneLabelArgs");
const Label_1 = require("../../../models/Label");
const helpers_1 = require("../../../helpers");
let UpdateOneLabelResolver = class UpdateOneLabelResolver {
    async updateOneLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneLabelResolver = UpdateOneLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Label_1.Label, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneLabelArgs_1.UpdateOneLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneLabelResolver.prototype, "updateOneLabel", null);
exports.UpdateOneLabelResolver = UpdateOneLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Label_1.Label)
], UpdateOneLabelResolver);
