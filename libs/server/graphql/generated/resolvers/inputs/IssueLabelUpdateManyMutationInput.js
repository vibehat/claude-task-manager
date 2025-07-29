"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let IssueLabelUpdateManyMutationInput = class IssueLabelUpdateManyMutationInput {
};
exports.IssueLabelUpdateManyMutationInput = IssueLabelUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], IssueLabelUpdateManyMutationInput.prototype, "id", void 0);
exports.IssueLabelUpdateManyMutationInput = IssueLabelUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpdateManyMutationInput", {})
], IssueLabelUpdateManyMutationInput);
