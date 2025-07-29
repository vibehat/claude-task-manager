"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnTeamProject = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Project_1 = require("../../models/Project");
const Team_1 = require("../../models/Team");
let CreateManyAndReturnTeamProject = class CreateManyAndReturnTeamProject {
};
exports.CreateManyAndReturnTeamProject = CreateManyAndReturnTeamProject;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeamProject.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeamProject.prototype, "teamId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CreateManyAndReturnTeamProject.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Team_1.Team, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Team_1.Team)
], CreateManyAndReturnTeamProject.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Project_1.Project, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Project_1.Project)
], CreateManyAndReturnTeamProject.prototype, "project", void 0);
exports.CreateManyAndReturnTeamProject = CreateManyAndReturnTeamProject = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CreateManyAndReturnTeamProject", {})
], CreateManyAndReturnTeamProject);
