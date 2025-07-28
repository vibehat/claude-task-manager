"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamProjectUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TeamProjectUpdateManyMutationInput = class TeamProjectUpdateManyMutationInput {
};
exports.TeamProjectUpdateManyMutationInput = TeamProjectUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TeamProjectUpdateManyMutationInput.prototype, "id", void 0);
exports.TeamProjectUpdateManyMutationInput = TeamProjectUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TeamProjectUpdateManyMutationInput", {})
], TeamProjectUpdateManyMutationInput);
