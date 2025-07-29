"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProject = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TeamProject = class TeamProject {
};
exports.TeamProject = TeamProject;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProject.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProject.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TeamProject.prototype, "projectId", void 0);
exports.TeamProject = TeamProject = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TeamProject", {})
], TeamProject);
