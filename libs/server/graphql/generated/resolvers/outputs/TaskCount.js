"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCountDependenciesArgs_1 = require("./args/TaskCountDependenciesArgs");
const TaskCountDependentsArgs_1 = require("./args/TaskCountDependentsArgs");
const TaskCountIssuesArgs_1 = require("./args/TaskCountIssuesArgs");
const TaskCountSubtasksArgs_1 = require("./args/TaskCountSubtasksArgs");
let TaskCount = class TaskCount {
    getSubtasks(root, args) {
        return root.subtasks;
    }
    getDependencies(root, args) {
        return root.dependencies;
    }
    getDependents(root, args) {
        return root.dependents;
    }
    getIssues(root, args) {
        return root.issues;
    }
};
exports.TaskCount = TaskCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "subtasks",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TaskCount, TaskCountSubtasksArgs_1.TaskCountSubtasksArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TaskCount.prototype, "getSubtasks", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "dependencies",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TaskCount, TaskCountDependenciesArgs_1.TaskCountDependenciesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TaskCount.prototype, "getDependencies", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "dependents",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TaskCount, TaskCountDependentsArgs_1.TaskCountDependentsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TaskCount.prototype, "getDependents", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "issues",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TaskCount, TaskCountIssuesArgs_1.TaskCountIssuesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TaskCount.prototype, "getIssues", null);
exports.TaskCount = TaskCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TaskCount", {})
], TaskCount);
