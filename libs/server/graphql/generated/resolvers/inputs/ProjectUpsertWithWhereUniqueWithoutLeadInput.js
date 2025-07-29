"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpsertWithWhereUniqueWithoutLeadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateWithoutLeadInput_1 = require("../inputs/ProjectCreateWithoutLeadInput");
const ProjectUpdateWithoutLeadInput_1 = require("../inputs/ProjectUpdateWithoutLeadInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectUpsertWithWhereUniqueWithoutLeadInput = class ProjectUpsertWithWhereUniqueWithoutLeadInput {
};
exports.ProjectUpsertWithWhereUniqueWithoutLeadInput = ProjectUpsertWithWhereUniqueWithoutLeadInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], ProjectUpsertWithWhereUniqueWithoutLeadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateWithoutLeadInput_1.ProjectUpdateWithoutLeadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateWithoutLeadInput_1.ProjectUpdateWithoutLeadInput)
], ProjectUpsertWithWhereUniqueWithoutLeadInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutLeadInput_1.ProjectCreateWithoutLeadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutLeadInput_1.ProjectCreateWithoutLeadInput)
], ProjectUpsertWithWhereUniqueWithoutLeadInput.prototype, "create", void 0);
exports.ProjectUpsertWithWhereUniqueWithoutLeadInput = ProjectUpsertWithWhereUniqueWithoutLeadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpsertWithWhereUniqueWithoutLeadInput", {})
], ProjectUpsertWithWhereUniqueWithoutLeadInput);
