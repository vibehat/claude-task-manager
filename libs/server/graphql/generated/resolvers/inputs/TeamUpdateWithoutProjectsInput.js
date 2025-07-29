"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateWithoutProjectsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CycleUpdateManyWithoutTeamNestedInput_1 = require("../inputs/CycleUpdateManyWithoutTeamNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TeamMemberUpdateManyWithoutTeamNestedInput_1 = require("../inputs/TeamMemberUpdateManyWithoutTeamNestedInput");
let TeamUpdateWithoutProjectsInput = class TeamUpdateWithoutProjectsInput {
};
exports.TeamUpdateWithoutProjectsInput = TeamUpdateWithoutProjectsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutProjectsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutProjectsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutProjectsInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TeamUpdateWithoutProjectsInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutProjectsInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeamUpdateWithoutProjectsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeamUpdateWithoutProjectsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateManyWithoutTeamNestedInput_1.TeamMemberUpdateManyWithoutTeamNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateManyWithoutTeamNestedInput_1.TeamMemberUpdateManyWithoutTeamNestedInput)
], TeamUpdateWithoutProjectsInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateManyWithoutTeamNestedInput_1.CycleUpdateManyWithoutTeamNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleUpdateManyWithoutTeamNestedInput_1.CycleUpdateManyWithoutTeamNestedInput)
], TeamUpdateWithoutProjectsInput.prototype, "cycles", void 0);
exports.TeamUpdateWithoutProjectsInput = TeamUpdateWithoutProjectsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateWithoutProjectsInput", {})
], TeamUpdateWithoutProjectsInput);
