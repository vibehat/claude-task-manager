"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnIssue = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAndReturnIssueAssigneeArgs_1 = require("./args/CreateManyAndReturnIssueAssigneeArgs");
const CreateManyAndReturnIssueCycleArgs_1 = require("./args/CreateManyAndReturnIssueCycleArgs");
const CreateManyAndReturnIssueIssuePriorityArgs_1 = require("./args/CreateManyAndReturnIssueIssuePriorityArgs");
const CreateManyAndReturnIssueIssueStatusArgs_1 = require("./args/CreateManyAndReturnIssueIssueStatusArgs");
const CreateManyAndReturnIssueParentIssueArgs_1 = require("./args/CreateManyAndReturnIssueParentIssueArgs");
const CreateManyAndReturnIssueProjectArgs_1 = require("./args/CreateManyAndReturnIssueProjectArgs");
const CreateManyAndReturnIssueSubtaskArgs_1 = require("./args/CreateManyAndReturnIssueSubtaskArgs");
const CreateManyAndReturnIssueTaskArgs_1 = require("./args/CreateManyAndReturnIssueTaskArgs");
const Cycle_1 = require("../../models/Cycle");
const Issue_1 = require("../../models/Issue");
const IssuePriority_1 = require("../../models/IssuePriority");
const IssueStatus_1 = require("../../models/IssueStatus");
const Project_1 = require("../../models/Project");
const Subtask_1 = require("../../models/Subtask");
const Task_1 = require("../../models/Task");
const User_1 = require("../../models/User");
let CreateManyAndReturnIssue = class CreateManyAndReturnIssue {
    getAssignee(root, args) {
        return root.assignee;
    }
    getProject(root, args) {
        return root.project;
    }
    getCycle(root, args) {
        return root.cycle;
    }
    getTask(root, args) {
        return root.task;
    }
    getSubtask(root, args) {
        return root.subtask;
    }
    getIssueStatus(root, args) {
        return root.issueStatus;
    }
    getIssuePriority(root, args) {
        return root.issuePriority;
    }
    getParentIssue(root, args) {
        return root.parentIssue;
    }
};
exports.CreateManyAndReturnIssue = CreateManyAndReturnIssue;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "statusId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "priorityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "cycleId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnIssue.prototype, "dueDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CreateManyAndReturnIssue.prototype, "taskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "subtaskId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "issueType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "parentIssueId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "assigneeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnIssue.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnIssue.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CreateManyAndReturnIssue.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => User_1.User, {
        name: "assignee",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnIssue, CreateManyAndReturnIssueAssigneeArgs_1.CreateManyAndReturnIssueAssigneeArgs]),
    tslib_1.__metadata("design:returntype", User_1.User)
], CreateManyAndReturnIssue.prototype, "getAssignee", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_1.Project, {
        name: "project",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnIssue, CreateManyAndReturnIssueProjectArgs_1.CreateManyAndReturnIssueProjectArgs]),
    tslib_1.__metadata("design:returntype", Project_1.Project)
], CreateManyAndReturnIssue.prototype, "getProject", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cycle_1.Cycle, {
        name: "cycle",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnIssue, CreateManyAndReturnIssueCycleArgs_1.CreateManyAndReturnIssueCycleArgs]),
    tslib_1.__metadata("design:returntype", Cycle_1.Cycle)
], CreateManyAndReturnIssue.prototype, "getCycle", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Task_1.Task, {
        name: "task",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnIssue, CreateManyAndReturnIssueTaskArgs_1.CreateManyAndReturnIssueTaskArgs]),
    tslib_1.__metadata("design:returntype", Task_1.Task)
], CreateManyAndReturnIssue.prototype, "getTask", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Subtask_1.Subtask, {
        name: "subtask",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnIssue, CreateManyAndReturnIssueSubtaskArgs_1.CreateManyAndReturnIssueSubtaskArgs]),
    tslib_1.__metadata("design:returntype", Subtask_1.Subtask)
], CreateManyAndReturnIssue.prototype, "getSubtask", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueStatus_1.IssueStatus, {
        name: "issueStatus",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnIssue, CreateManyAndReturnIssueIssueStatusArgs_1.CreateManyAndReturnIssueIssueStatusArgs]),
    tslib_1.__metadata("design:returntype", IssueStatus_1.IssueStatus)
], CreateManyAndReturnIssue.prototype, "getIssueStatus", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriority_1.IssuePriority, {
        name: "issuePriority",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnIssue, CreateManyAndReturnIssueIssuePriorityArgs_1.CreateManyAndReturnIssueIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", IssuePriority_1.IssuePriority)
], CreateManyAndReturnIssue.prototype, "getIssuePriority", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Issue_1.Issue, {
        name: "parentIssue",
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateManyAndReturnIssue, CreateManyAndReturnIssueParentIssueArgs_1.CreateManyAndReturnIssueParentIssueArgs]),
    tslib_1.__metadata("design:returntype", Issue_1.Issue)
], CreateManyAndReturnIssue.prototype, "getParentIssue", null);
exports.CreateManyAndReturnIssue = CreateManyAndReturnIssue = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnIssue", {})
], CreateManyAndReturnIssue);
