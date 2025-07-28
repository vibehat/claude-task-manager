"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateOrConnectWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateWithoutIssuesInput_1 = require("../inputs/ProjectCreateWithoutIssuesInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectCreateOrConnectWithoutIssuesInput = class ProjectCreateOrConnectWithoutIssuesInput {
};
exports.ProjectCreateOrConnectWithoutIssuesInput = ProjectCreateOrConnectWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], ProjectCreateOrConnectWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutIssuesInput_1.ProjectCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutIssuesInput_1.ProjectCreateWithoutIssuesInput)
], ProjectCreateOrConnectWithoutIssuesInput.prototype, "create", void 0);
exports.ProjectCreateOrConnectWithoutIssuesInput = ProjectCreateOrConnectWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateOrConnectWithoutIssuesInput", {})
], ProjectCreateOrConnectWithoutIssuesInput);
