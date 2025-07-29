"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCountIssuesArgs_1 = require("./args/ProjectCountIssuesArgs");
const ProjectCountTeamsArgs_1 = require("./args/ProjectCountTeamsArgs");
let ProjectCount = class ProjectCount {
    getIssues(root, args) {
        return root.issues;
    }
    getTeams(root, args) {
        return root.teams;
    }
};
exports.ProjectCount = ProjectCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "issues",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProjectCount, ProjectCountIssuesArgs_1.ProjectCountIssuesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ProjectCount.prototype, "getIssues", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "teams",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProjectCount, ProjectCountTeamsArgs_1.ProjectCountTeamsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ProjectCount.prototype, "getTeams", null);
exports.ProjectCount = ProjectCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProjectCount", {})
], ProjectCount);
