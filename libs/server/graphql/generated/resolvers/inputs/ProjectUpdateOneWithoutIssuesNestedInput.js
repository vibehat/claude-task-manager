"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateOneWithoutIssuesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateOrConnectWithoutIssuesInput_1 = require("../inputs/ProjectCreateOrConnectWithoutIssuesInput");
const ProjectCreateWithoutIssuesInput_1 = require("../inputs/ProjectCreateWithoutIssuesInput");
const ProjectUpdateToOneWithWhereWithoutIssuesInput_1 = require("../inputs/ProjectUpdateToOneWithWhereWithoutIssuesInput");
const ProjectUpsertWithoutIssuesInput_1 = require("../inputs/ProjectUpsertWithoutIssuesInput");
const ProjectWhereInput_1 = require("../inputs/ProjectWhereInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectUpdateOneWithoutIssuesNestedInput = class ProjectUpdateOneWithoutIssuesNestedInput {
};
exports.ProjectUpdateOneWithoutIssuesNestedInput = ProjectUpdateOneWithoutIssuesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutIssuesInput_1.ProjectCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutIssuesInput_1.ProjectCreateWithoutIssuesInput)
], ProjectUpdateOneWithoutIssuesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutIssuesInput_1.ProjectCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateOrConnectWithoutIssuesInput_1.ProjectCreateOrConnectWithoutIssuesInput)
], ProjectUpdateOneWithoutIssuesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpsertWithoutIssuesInput_1.ProjectUpsertWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectUpsertWithoutIssuesInput_1.ProjectUpsertWithoutIssuesInput)
], ProjectUpdateOneWithoutIssuesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectUpdateOneWithoutIssuesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereInput_1.ProjectWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereInput_1.ProjectWhereInput)
], ProjectUpdateOneWithoutIssuesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], ProjectUpdateOneWithoutIssuesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateToOneWithWhereWithoutIssuesInput_1.ProjectUpdateToOneWithWhereWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectUpdateToOneWithWhereWithoutIssuesInput_1.ProjectUpdateToOneWithWhereWithoutIssuesInput)
], ProjectUpdateOneWithoutIssuesNestedInput.prototype, "update", void 0);
exports.ProjectUpdateOneWithoutIssuesNestedInput = ProjectUpdateOneWithoutIssuesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpdateOneWithoutIssuesNestedInput", {})
], ProjectUpdateOneWithoutIssuesNestedInput);
