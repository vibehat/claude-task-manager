"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TeamCountCyclesArgs_1 = require("./args/TeamCountCyclesArgs");
const TeamCountMembersArgs_1 = require("./args/TeamCountMembersArgs");
const TeamCountProjectsArgs_1 = require("./args/TeamCountProjectsArgs");
let TeamCount = class TeamCount {
    getMembers(root, args) {
        return root.members;
    }
    getProjects(root, args) {
        return root.projects;
    }
    getCycles(root, args) {
        return root.cycles;
    }
};
exports.TeamCount = TeamCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "members",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TeamCount, TeamCountMembersArgs_1.TeamCountMembersArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TeamCount.prototype, "getMembers", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "projects",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TeamCount, TeamCountProjectsArgs_1.TeamCountProjectsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TeamCount.prototype, "getProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "cycles",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TeamCount, TeamCountCyclesArgs_1.TeamCountCyclesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TeamCount.prototype, "getCycles", null);
exports.TeamCount = TeamCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamCount", {})
], TeamCount);
