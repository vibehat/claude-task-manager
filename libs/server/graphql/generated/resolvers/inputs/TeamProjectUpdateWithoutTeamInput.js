"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectUpdateOneRequiredWithoutTeamsNestedInput_1 = require("../inputs/ProjectUpdateOneRequiredWithoutTeamsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TeamProjectUpdateWithoutTeamInput = class TeamProjectUpdateWithoutTeamInput {
};
exports.TeamProjectUpdateWithoutTeamInput = TeamProjectUpdateWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamProjectUpdateWithoutTeamInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutTeamsNestedInput_1.ProjectUpdateOneRequiredWithoutTeamsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectUpdateOneRequiredWithoutTeamsNestedInput_1.ProjectUpdateOneRequiredWithoutTeamsNestedInput)
], TeamProjectUpdateWithoutTeamInput.prototype, "project", void 0);
exports.TeamProjectUpdateWithoutTeamInput = TeamProjectUpdateWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateWithoutTeamInput", {})
], TeamProjectUpdateWithoutTeamInput);
