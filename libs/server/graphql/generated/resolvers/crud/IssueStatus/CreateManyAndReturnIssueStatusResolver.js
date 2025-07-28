"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssueStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnIssueStatusArgs_1 = require("./args/CreateManyAndReturnIssueStatusArgs");
const IssueStatus_1 = require("../../../models/IssueStatus");
const CreateManyAndReturnIssueStatus_1 = require("../../outputs/CreateManyAndReturnIssueStatus");
const helpers_1 = require("../../../helpers");
let CreateManyAndReturnIssueStatusResolver = class CreateManyAndReturnIssueStatusResolver {
    async createManyAndReturnIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAndReturnIssueStatusResolver = CreateManyAndReturnIssueStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIssueStatus_1.CreateManyAndReturnIssueStatus], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAndReturnIssueStatusArgs_1.CreateManyAndReturnIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAndReturnIssueStatusResolver.prototype, "createManyAndReturnIssueStatus", null);
exports.CreateManyAndReturnIssueStatusResolver = CreateManyAndReturnIssueStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], CreateManyAndReturnIssueStatusResolver);
