"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpdateWithoutTeamInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutTeamsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTeamsNestedInput");
let TeamMemberUpdateWithoutTeamInput = class TeamMemberUpdateWithoutTeamInput {
};
exports.TeamMemberUpdateWithoutTeamInput = TeamMemberUpdateWithoutTeamInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamMemberUpdateWithoutTeamInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTeamsNestedInput_1.UserUpdateOneRequiredWithoutTeamsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTeamsNestedInput_1.UserUpdateOneRequiredWithoutTeamsNestedInput)
], TeamMemberUpdateWithoutTeamInput.prototype, "user", void 0);
exports.TeamMemberUpdateWithoutTeamInput = TeamMemberUpdateWithoutTeamInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpdateWithoutTeamInput", {})
], TeamMemberUpdateWithoutTeamInput);
