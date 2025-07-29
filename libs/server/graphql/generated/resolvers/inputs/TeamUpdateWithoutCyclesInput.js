"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateWithoutCyclesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TeamMemberUpdateManyWithoutTeamNestedInput_1 = require("../inputs/TeamMemberUpdateManyWithoutTeamNestedInput");
const TeamProjectUpdateManyWithoutTeamNestedInput_1 = require("../inputs/TeamProjectUpdateManyWithoutTeamNestedInput");
let TeamUpdateWithoutCyclesInput = class TeamUpdateWithoutCyclesInput {
};
exports.TeamUpdateWithoutCyclesInput = TeamUpdateWithoutCyclesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutCyclesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutCyclesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutCyclesInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TeamUpdateWithoutCyclesInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutCyclesInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeamUpdateWithoutCyclesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeamUpdateWithoutCyclesInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateManyWithoutTeamNestedInput_1.TeamMemberUpdateManyWithoutTeamNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateManyWithoutTeamNestedInput_1.TeamMemberUpdateManyWithoutTeamNestedInput)
], TeamUpdateWithoutCyclesInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateManyWithoutTeamNestedInput_1.TeamProjectUpdateManyWithoutTeamNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateManyWithoutTeamNestedInput_1.TeamProjectUpdateManyWithoutTeamNestedInput)
], TeamUpdateWithoutCyclesInput.prototype, "projects", void 0);
exports.TeamUpdateWithoutCyclesInput = TeamUpdateWithoutCyclesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateWithoutCyclesInput", {})
], TeamUpdateWithoutCyclesInput);
