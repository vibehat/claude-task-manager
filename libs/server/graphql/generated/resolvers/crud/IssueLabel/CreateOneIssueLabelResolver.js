"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneIssueLabelArgs_1 = require("./args/CreateOneIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const helpers_1 = require("../../../helpers");
let CreateOneIssueLabelResolver = class CreateOneIssueLabelResolver {
    async createOneIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneIssueLabelResolver = CreateOneIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => IssueLabel_1.IssueLabel, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneIssueLabelArgs_1.CreateOneIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneIssueLabelResolver.prototype, "createOneIssueLabel", null);
exports.CreateOneIssueLabelResolver = CreateOneIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], CreateOneIssueLabelResolver);
