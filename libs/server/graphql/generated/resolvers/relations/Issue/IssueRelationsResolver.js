"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cycle_1 = require("../../../models/Cycle");
const Issue_1 = require("../../../models/Issue");
const IssueLabel_1 = require("../../../models/IssueLabel");
const IssuePriority_1 = require("../../../models/IssuePriority");
const IssueStatus_1 = require("../../../models/IssueStatus");
const Project_1 = require("../../../models/Project");
const Subtask_1 = require("../../../models/Subtask");
const Task_1 = require("../../../models/Task");
const User_1 = require("../../../models/User");
const IssueAssigneeArgs_1 = require("./args/IssueAssigneeArgs");
const IssueCycleArgs_1 = require("./args/IssueCycleArgs");
const IssueIssuePriorityArgs_1 = require("./args/IssueIssuePriorityArgs");
const IssueIssueStatusArgs_1 = require("./args/IssueIssueStatusArgs");
const IssueLabelsArgs_1 = require("./args/IssueLabelsArgs");
const IssueParentIssueArgs_1 = require("./args/IssueParentIssueArgs");
const IssueProjectArgs_1 = require("./args/IssueProjectArgs");
const IssueSubIssuesArgs_1 = require("./args/IssueSubIssuesArgs");
const IssueSubtaskArgs_1 = require("./args/IssueSubtaskArgs");
const IssueTaskArgs_1 = require("./args/IssueTaskArgs");
const helpers_1 = require("../../../helpers");
let IssueRelationsResolver = class IssueRelationsResolver {
    async assignee(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).assignee({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async project(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).project({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async cycle(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).cycle({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async task(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).task({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async subtask(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).subtask({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issueStatus(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).issueStatus({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async issuePriority(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).issuePriority({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async labels(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).labels({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async parentIssue(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).parentIssue({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async subIssues(issue, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issue.findUniqueOrThrow({
            where: {
                id: issue.id,
            },
        }).subIssues({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.IssueRelationsResolver = IssueRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueAssigneeArgs_1.IssueAssigneeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "assignee", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Project_1.Project, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueProjectArgs_1.IssueProjectArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "project", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Cycle_1.Cycle, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueCycleArgs_1.IssueCycleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "cycle", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Task_1.Task, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueTaskArgs_1.IssueTaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "task", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Subtask_1.Subtask, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueSubtaskArgs_1.IssueSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "subtask", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => IssueStatus_1.IssueStatus, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueIssueStatusArgs_1.IssueIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "issueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => IssuePriority_1.IssuePriority, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueIssuePriorityArgs_1.IssueIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "issuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [IssueLabel_1.IssueLabel], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueLabelsArgs_1.IssueLabelsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "labels", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Issue_1.Issue, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueParentIssueArgs_1.IssueParentIssueArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "parentIssue", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Issue_1.Issue], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__param(3, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Issue_1.Issue, Object, Object, IssueSubIssuesArgs_1.IssueSubIssuesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], IssueRelationsResolver.prototype, "subIssues", null);
exports.IssueRelationsResolver = IssueRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Issue_1.Issue)
], IssueRelationsResolver);
