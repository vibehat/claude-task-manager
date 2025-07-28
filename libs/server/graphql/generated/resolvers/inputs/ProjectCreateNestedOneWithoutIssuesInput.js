"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCreateNestedOneWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateOrConnectWithoutIssuesInput_1 = require("../inputs/ProjectCreateOrConnectWithoutIssuesInput");
const ProjectCreateWithoutIssuesInput_1 = require("../inputs/ProjectCreateWithoutIssuesInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectCreateNestedOneWithoutIssuesInput = class ProjectCreateNestedOneWithoutIssuesInput {
};
exports.ProjectCreateNestedOneWithoutIssuesInput = ProjectCreateNestedOneWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutIssuesInput_1.ProjectCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutIssuesInput_1.ProjectCreateWithoutIssuesInput)
], ProjectCreateNestedOneWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutIssuesInput_1.ProjectCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateOrConnectWithoutIssuesInput_1.ProjectCreateOrConnectWithoutIssuesInput)
], ProjectCreateNestedOneWithoutIssuesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], ProjectCreateNestedOneWithoutIssuesInput.prototype, "connect", void 0);
exports.ProjectCreateNestedOneWithoutIssuesInput = ProjectCreateNestedOneWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectCreateNestedOneWithoutIssuesInput", {})
], ProjectCreateNestedOneWithoutIssuesInput);
