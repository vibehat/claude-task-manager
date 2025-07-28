"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TeamUpdateOneRequiredWithoutProjectsNestedInput_1 = require("../inputs/TeamUpdateOneRequiredWithoutProjectsNestedInput");
let TeamProjectUpdateWithoutProjectInput = class TeamProjectUpdateWithoutProjectInput {
};
exports.TeamProjectUpdateWithoutProjectInput = TeamProjectUpdateWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamProjectUpdateWithoutProjectInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateOneRequiredWithoutProjectsNestedInput_1.TeamUpdateOneRequiredWithoutProjectsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpdateOneRequiredWithoutProjectsNestedInput_1.TeamUpdateOneRequiredWithoutProjectsNestedInput)
], TeamProjectUpdateWithoutProjectInput.prototype, "team", void 0);
exports.TeamProjectUpdateWithoutProjectInput = TeamProjectUpdateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateWithoutProjectInput", {})
], TeamProjectUpdateWithoutProjectInput);
