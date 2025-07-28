"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProjectUpdateOneRequiredWithoutTeamsNestedInput_1 = require("../inputs/ProjectUpdateOneRequiredWithoutTeamsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TeamUpdateOneRequiredWithoutProjectsNestedInput_1 = require("../inputs/TeamUpdateOneRequiredWithoutProjectsNestedInput");
let TeamProjectUpdateInput = class TeamProjectUpdateInput {
};
exports.TeamProjectUpdateInput = TeamProjectUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamProjectUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateOneRequiredWithoutProjectsNestedInput_1.TeamUpdateOneRequiredWithoutProjectsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpdateOneRequiredWithoutProjectsNestedInput_1.TeamUpdateOneRequiredWithoutProjectsNestedInput)
], TeamProjectUpdateInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutTeamsNestedInput_1.ProjectUpdateOneRequiredWithoutTeamsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProjectUpdateOneRequiredWithoutTeamsNestedInput_1.ProjectUpdateOneRequiredWithoutTeamsNestedInput)
], TeamProjectUpdateInput.prototype, "project", void 0);
exports.TeamProjectUpdateInput = TeamProjectUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateInput", {})
], TeamProjectUpdateInput);
