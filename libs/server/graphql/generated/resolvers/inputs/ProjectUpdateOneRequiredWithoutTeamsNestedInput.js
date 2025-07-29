"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectUpdateOneRequiredWithoutTeamsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectCreateOrConnectWithoutTeamsInput_1 = require("../inputs/ProjectCreateOrConnectWithoutTeamsInput");
const ProjectCreateWithoutTeamsInput_1 = require("../inputs/ProjectCreateWithoutTeamsInput");
const ProjectUpdateToOneWithWhereWithoutTeamsInput_1 = require("../inputs/ProjectUpdateToOneWithWhereWithoutTeamsInput");
const ProjectUpsertWithoutTeamsInput_1 = require("../inputs/ProjectUpsertWithoutTeamsInput");
const ProjectWhereUniqueInput_1 = require("../inputs/ProjectWhereUniqueInput");
let ProjectUpdateOneRequiredWithoutTeamsNestedInput = class ProjectUpdateOneRequiredWithoutTeamsNestedInput {
};
exports.ProjectUpdateOneRequiredWithoutTeamsNestedInput = ProjectUpdateOneRequiredWithoutTeamsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateWithoutTeamsInput_1.ProjectCreateWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateWithoutTeamsInput_1.ProjectCreateWithoutTeamsInput)
], ProjectUpdateOneRequiredWithoutTeamsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutTeamsInput_1.ProjectCreateOrConnectWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectCreateOrConnectWithoutTeamsInput_1.ProjectCreateOrConnectWithoutTeamsInput)
], ProjectUpdateOneRequiredWithoutTeamsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpsertWithoutTeamsInput_1.ProjectUpsertWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectUpsertWithoutTeamsInput_1.ProjectUpsertWithoutTeamsInput)
], ProjectUpdateOneRequiredWithoutTeamsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectWhereUniqueInput_1.ProjectWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectWhereUniqueInput_1.ProjectWhereUniqueInput)
], ProjectUpdateOneRequiredWithoutTeamsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateToOneWithWhereWithoutTeamsInput_1.ProjectUpdateToOneWithWhereWithoutTeamsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectUpdateToOneWithWhereWithoutTeamsInput_1.ProjectUpdateToOneWithWhereWithoutTeamsInput)
], ProjectUpdateOneRequiredWithoutTeamsNestedInput.prototype, "update", void 0);
exports.ProjectUpdateOneRequiredWithoutTeamsNestedInput = ProjectUpdateOneRequiredWithoutTeamsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProjectUpdateOneRequiredWithoutTeamsNestedInput", {})
], ProjectUpdateOneRequiredWithoutTeamsNestedInput);
