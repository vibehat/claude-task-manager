"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateWithWhereUniqueWithoutLeadInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectUpdateWithoutLeadInput_1 = require("../inputs/ProjectUpdateWithoutLeadInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectUpdateWithWhereUniqueWithoutLeadInput = class ProjectUpdateWithWhereUniqueWithoutLeadInput {
};
exports.ProjectUpdateWithWhereUniqueWithoutLeadInput = ProjectUpdateWithWhereUniqueWithoutLeadInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], ProjectUpdateWithWhereUniqueWithoutLeadInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateWithoutLeadInput_1.ProjectUpdateWithoutLeadInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProjectUpdateWithoutLeadInput_1.ProjectUpdateWithoutLeadInput)
], ProjectUpdateWithWhereUniqueWithoutLeadInput.prototype, "data", void 0);
exports.ProjectUpdateWithWhereUniqueWithoutLeadInput = ProjectUpdateWithWhereUniqueWithoutLeadInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpdateWithWhereUniqueWithoutLeadInput", {})
], ProjectUpdateWithWhereUniqueWithoutLeadInput);
