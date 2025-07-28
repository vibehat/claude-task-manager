"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StringFieldUpdateOperationsInput = class StringFieldUpdateOperationsInput {
};
exports.StringFieldUpdateOperationsInput = StringFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringFieldUpdateOperationsInput.prototype, "set", void 0);
exports.StringFieldUpdateOperationsInput = StringFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StringFieldUpdateOperationsInput", {})
], StringFieldUpdateOperationsInput);
