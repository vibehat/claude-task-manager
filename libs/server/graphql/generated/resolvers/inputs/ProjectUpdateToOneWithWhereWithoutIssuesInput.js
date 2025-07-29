"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateToOneWithWhereWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectUpdateWithoutIssuesInput_1 = require("../inputs/ProjectUpdateWithoutIssuesInput");
const ProjectWhereInput_1 = require("../inputs/ProjectWhereInput");
let ProjectUpdateToOneWithWhereWithoutIssuesInput = class ProjectUpdateToOneWithWhereWithoutIssuesInput {
};
exports.ProjectUpdateToOneWithWhereWithoutIssuesInput = ProjectUpdateToOneWithWhereWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectUpdateToOneWithWhereWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateWithoutIssuesInput_1.ProjectUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateWithoutIssuesInput_1.ProjectUpdateWithoutIssuesInput)
], ProjectUpdateToOneWithWhereWithoutIssuesInput.prototype, "data", void 0);
exports.ProjectUpdateToOneWithWhereWithoutIssuesInput = ProjectUpdateToOneWithWhereWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpdateToOneWithWhereWithoutIssuesInput", {})
], ProjectUpdateToOneWithWhereWithoutIssuesInput);
