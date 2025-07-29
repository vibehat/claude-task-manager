"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueLabelResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnIssueLabelArgs_1 = require("./args/CreateManyAndReturnIssueLabelArgs");
const IssueLabel_1 = require("../../../models/IssueLabel");
const CreateManyAndReturnIssueLabel_1 = require("../../outputs/CreateManyAndReturnIssueLabel");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnIssueLabelResolver = class CreateManyAndReturnIssueLabelResolver {
    async createManyAndReturnIssueLabel(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueLabel.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnIssueLabelResolver = CreateManyAndReturnIssueLabelResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssueLabel_1.CreateManyAndReturnIssueLabel], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnIssueLabelArgs_1.CreateManyAndReturnIssueLabelArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnIssueLabelResolver.prototype, "createManyAndReturnIssueLabel", null);
exports.CreateManyAndReturnIssueLabelResolver = CreateManyAndReturnIssueLabelResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueLabel_1.IssueLabel)
], CreateManyAndReturnIssueLabelResolver);
