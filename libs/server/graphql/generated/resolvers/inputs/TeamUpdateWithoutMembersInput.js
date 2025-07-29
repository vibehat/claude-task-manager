"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CycleUpdateManyWithoutTeamNestedInput_1 = require("../inputs/CycleUpdateManyWithoutTeamNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TeamProjectUpdateManyWithoutTeamNestedInput_1 = require("../inputs/TeamProjectUpdateManyWithoutTeamNestedInput");
let TeamUpdateWithoutMembersInput = class TeamUpdateWithoutMembersInput {
};
exports.TeamUpdateWithoutMembersInput = TeamUpdateWithoutMembersInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutMembersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutMembersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutMembersInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TeamUpdateWithoutMembersInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateWithoutMembersInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeamUpdateWithoutMembersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeamUpdateWithoutMembersInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateManyWithoutTeamNestedInput_1.TeamProjectUpdateManyWithoutTeamNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateManyWithoutTeamNestedInput_1.TeamProjectUpdateManyWithoutTeamNestedInput)
], TeamUpdateWithoutMembersInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateManyWithoutTeamNestedInput_1.CycleUpdateManyWithoutTeamNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleUpdateManyWithoutTeamNestedInput_1.CycleUpdateManyWithoutTeamNestedInput)
], TeamUpdateWithoutMembersInput.prototype, "cycles", void 0);
exports.TeamUpdateWithoutMembersInput = TeamUpdateWithoutMembersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateWithoutMembersInput", {})
], TeamUpdateWithoutMembersInput);
