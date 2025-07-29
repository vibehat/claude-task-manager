"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyIssueStatusResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyIssueStatusArgs_1 = require("./args/CreateManyIssueStatusArgs");
const IssueStatus_1 = require("../../../models/IssueStatus");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyIssueStatusResolver = class CreateManyIssueStatusResolver {
    async createManyIssueStatus(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issueStatus.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyIssueStatusResolver = CreateManyIssueStatusResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyIssueStatusArgs_1.CreateManyIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyIssueStatusResolver.prototype, "createManyIssueStatus", null);
exports.CreateManyIssueStatusResolver = CreateManyIssueStatusResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssueStatus_1.IssueStatus)
], CreateManyIssueStatusResolver);
