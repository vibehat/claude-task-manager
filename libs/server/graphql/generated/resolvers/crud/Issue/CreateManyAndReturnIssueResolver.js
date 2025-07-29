"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnIssueArgs_1 = require("./args/CreateManyAndReturnIssueArgs");
const Issue_1 = require("../../../models/Issue");
const CreateManyAndReturnIssue_1 = require("../../outputs/CreateManyAndReturnIssue");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnIssueResolver = class CreateManyAndReturnIssueResolver {
    async createManyAndReturnIssue(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnIssueResolver = CreateManyAndReturnIssueResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssue_1.CreateManyAndReturnIssue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnIssueArgs_1.CreateManyAndReturnIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnIssueResolver.prototype, "createManyAndReturnIssue", null);
exports.CreateManyAndReturnIssueResolver = CreateManyAndReturnIssueResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], CreateManyAndReturnIssueResolver);
