"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpsertWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateWithoutIssuesInput_1 = require("../inputs/ProjectCreateWithoutIssuesInput");
const ProjectUpdateWithoutIssuesInput_1 = require("../inputs/ProjectUpdateWithoutIssuesInput");
const ProjectWhereInput_1 = require("../inputs/ProjectWhereInput");
let ProjectUpsertWithoutIssuesInput = class ProjectUpsertWithoutIssuesInput {
};
exports.ProjectUpsertWithoutIssuesInput = ProjectUpsertWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateWithoutIssuesInput_1.ProjectUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateWithoutIssuesInput_1.ProjectUpdateWithoutIssuesInput)
], ProjectUpsertWithoutIssuesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutIssuesInput_1.ProjectCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutIssuesInput_1.ProjectCreateWithoutIssuesInput)
], ProjectUpsertWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectUpsertWithoutIssuesInput.prototype, "where", void 0);
exports.ProjectUpsertWithoutIssuesInput = ProjectUpsertWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpsertWithoutIssuesInput", {})
], ProjectUpsertWithoutIssuesInput);
