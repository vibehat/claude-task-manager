"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabel_1 = require("../../../models/IssueLabel");
const Label_1 = require("../../../models/Label");
const LabelIssuesArgs_1 = require("./args/LabelIssuesArgs");
const helpers_1 = require("../../../helpers");
let LabelRelationsResolver = class LabelRelationsResolver {
    async issues(label, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).label.findUniqueOrThrow({
            where: {
                id: label.id,
            },
        }).issues({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.LabelRelationsResolver = LabelRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [IssueLabel_1.IssueLabel], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Label_1.Label, Object, Object, LabelIssuesArgs_1.LabelIssuesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LabelRelationsResolver.prototype, "issues", null);
exports.LabelRelationsResolver = LabelRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Label_1.Label)
], LabelRelationsResolver);
