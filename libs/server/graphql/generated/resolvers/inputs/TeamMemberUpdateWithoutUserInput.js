"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TeamUpdateOneRequiredWithoutMembersNestedInput_1 = require("../inputs/TeamUpdateOneRequiredWithoutMembersNestedInput");
let TeamMemberUpdateWithoutUserInput = class TeamMemberUpdateWithoutUserInput {
};
exports.TeamMemberUpdateWithoutUserInput = TeamMemberUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamMemberUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateOneRequiredWithoutMembersNestedInput_1.TeamUpdateOneRequiredWithoutMembersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpdateOneRequiredWithoutMembersNestedInput_1.TeamUpdateOneRequiredWithoutMembersNestedInput)
], TeamMemberUpdateWithoutUserInput.prototype, "team", void 0);
exports.TeamMemberUpdateWithoutUserInput = TeamMemberUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpdateWithoutUserInput", {})
], TeamMemberUpdateWithoutUserInput);
