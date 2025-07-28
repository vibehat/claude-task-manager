"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCountAssignedIssuesArgs_1 = require("./args/UserCountAssignedIssuesArgs");
const UserCountLedProjectsArgs_1 = require("./args/UserCountLedProjectsArgs");
const UserCountTeamsArgs_1 = require("./args/UserCountTeamsArgs");
let UserCount = class UserCount {
    getAssignedIssues(root, args) {
        return root.assignedIssues;
    }
    getTeams(root, args) {
        return root.teams;
    }
    getLedProjects(root, args) {
        return root.ledProjects;
    }
};
exports.UserCount = UserCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "assignedIssues",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountAssignedIssuesArgs_1.UserCountAssignedIssuesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getAssignedIssues", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "teams",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountTeamsArgs_1.UserCountTeamsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getTeams", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "ledProjects",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserCount, UserCountLedProjectsArgs_1.UserCountLedProjectsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserCount.prototype, "getLedProjects", null);
exports.UserCount = UserCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserCount", {})
], UserCount);
