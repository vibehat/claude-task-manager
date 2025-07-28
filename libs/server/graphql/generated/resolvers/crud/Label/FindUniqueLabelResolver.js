"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueLabelArgs_1 = require("./args/FindUniqueLabelArgs");
const Label_1 = require("../../../models/Label");
const helpers_1 = require("../../../helpers");
let FindUniqueLabelResolver = class FindUniqueLabelResolver {
    async label(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueLabelResolver = FindUniqueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Label_1.Label, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLabelArgs_1.FindUniqueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueLabelResolver.prototype, "label", null);
exports.FindUniqueLabelResolver = FindUniqueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Label_1.Label)
], FindUniqueLabelResolver);
