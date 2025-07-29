"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CycleUpdateManyWithoutTeamNestedInput_1 = require("../inputs/CycleUpdateManyWithoutTeamNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TeamMemberUpdateManyWithoutTeamNestedInput_1 = require("../inputs/TeamMemberUpdateManyWithoutTeamNestedInput");
const TeamProjectUpdateManyWithoutTeamNestedInput_1 = require("../inputs/TeamProjectUpdateManyWithoutTeamNestedInput");
let TeamUpdateInput = class TeamUpdateInput {
};
exports.TeamUpdateInput = TeamUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateInput.prototype, "icon", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], TeamUpdateInput.prototype, "joined", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamUpdateInput.prototype, "color", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeamUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TeamUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamMemberUpdateManyWithoutTeamNestedInput_1.TeamMemberUpdateManyWithoutTeamNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamMemberUpdateManyWithoutTeamNestedInput_1.TeamMemberUpdateManyWithoutTeamNestedInput)
], TeamUpdateInput.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamProjectUpdateManyWithoutTeamNestedInput_1.TeamProjectUpdateManyWithoutTeamNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamProjectUpdateManyWithoutTeamNestedInput_1.TeamProjectUpdateManyWithoutTeamNestedInput)
], TeamUpdateInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateManyWithoutTeamNestedInput_1.CycleUpdateManyWithoutTeamNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleUpdateManyWithoutTeamNestedInput_1.CycleUpdateManyWithoutTeamNestedInput)
], TeamUpdateInput.prototype, "cycles", void 0);
exports.TeamUpdateInput = TeamUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamUpdateInput", {})
], TeamUpdateInput);
