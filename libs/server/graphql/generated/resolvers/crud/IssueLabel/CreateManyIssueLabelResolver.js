"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyIssueLabelArgs_1 = require("./args/CreateManyIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyIssueLabelResolver = class CreateManyIssueLabelResolver {
    async createManyIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyIssueLabelResolver = CreateManyIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIssueLabelArgs_1.CreateManyIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyIssueLabelResolver.prototype, "createManyIssueLabel", null);
exports.CreateManyIssueLabelResolver = CreateManyIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], CreateManyIssueLabelResolver);
