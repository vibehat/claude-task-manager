"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneLabelArgs_1 = require("./args/UpsertOneLabelArgs");
const Label_1 = require("../../../models/Label");
const helpers_1 = require("../../../helpers");
let UpsertOneLabelResolver = class UpsertOneLabelResolver {
    async upsertOneLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneLabelResolver = UpsertOneLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Label_1.Label, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneLabelArgs_1.UpsertOneLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneLabelResolver.prototype, "upsertOneLabel", null);
exports.UpsertOneLabelResolver = UpsertOneLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Label_1.Label)
], UpsertOneLabelResolver);
