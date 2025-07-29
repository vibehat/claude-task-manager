"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneIssueResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneIssueArgs_1 = require("./args/CreateOneIssueArgs");
const Issue_1 = require("../../../models/Issue");
const helpers_1 = require("../../../helpers");
let CreateOneIssueResolver = class CreateOneIssueResolver {
    async createOneIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneIssueResolver = CreateOneIssueResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Issue_1.Issue, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneIssueArgs_1.CreateOneIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneIssueResolver.prototype, "createOneIssue", null);
exports.CreateOneIssueResolver = CreateOneIssueResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], CreateOneIssueResolver);
