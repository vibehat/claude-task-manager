"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuePriorityRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Issue_1 = require("../../../models/Issue");
const IssuePriority_1 = require("../../../models/IssuePriority");
const IssuePriorityIssuesArgs_1 = require("./args/IssuePriorityIssuesArgs");
const helpers_1 = require("../../../helpers");
let IssuePriorityRelationsResolver = class IssuePriorityRelationsResolver {
    async issues(issuePriority, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.findUniqueOrThrow({
            where: {
                id: issuePriority.id,
            },
        }).issues({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.IssuePriorityRelationsResolver = IssuePriorityRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Issue_1.Issue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [IssuePriority_1.IssuePriority, Object, Object, IssuePriorityIssuesArgs_1.IssuePriorityIssuesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssuePriorityRelationsResolver.prototype, "issues", null);
exports.IssuePriorityRelationsResolver = IssuePriorityRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], IssuePriorityRelationsResolver);
