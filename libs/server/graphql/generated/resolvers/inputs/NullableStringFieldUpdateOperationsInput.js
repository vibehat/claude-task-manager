"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableStringFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NullableStringFieldUpdateOperationsInput = class NullableStringFieldUpdateOperationsInput {
};
exports.NullableStringFieldUpdateOperationsInput = NullableStringFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NullableStringFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableStringFieldUpdateOperationsInput = NullableStringFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableStringFieldUpdateOperationsInput", {})
], NullableStringFieldUpdateOperationsInput);
