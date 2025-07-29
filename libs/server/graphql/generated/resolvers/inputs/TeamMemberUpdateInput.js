"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TeamUpdateOneRequiredWithoutMembersNestedInput_1 = require("../inputs/TeamUpdateOneRequiredWithoutMembersNestedInput");
const UserUpdateOneRequiredWithoutTeamsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTeamsNestedInput");
let TeamMemberUpdateInput = class TeamMemberUpdateInput {
};
exports.TeamMemberUpdateInput = TeamMemberUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamMemberUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TeamUpdateOneRequiredWithoutMembersNestedInput_1.TeamUpdateOneRequiredWithoutMembersNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TeamUpdateOneRequiredWithoutMembersNestedInput_1.TeamUpdateOneRequiredWithoutMembersNestedInput)
], TeamMemberUpdateInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTeamsNestedInput_1.UserUpdateOneRequiredWithoutTeamsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTeamsNestedInput_1.UserUpdateOneRequiredWithoutTeamsNestedInput)
], TeamMemberUpdateInput.prototype, "user", void 0);
exports.TeamMemberUpdateInput = TeamMemberUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamMemberUpdateInput", {})
], TeamMemberUpdateInput);
