"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableDateTimeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NullableDateTimeFieldUpdateOperationsInput = class NullableDateTimeFieldUpdateOperationsInput {
};
exports.NullableDateTimeFieldUpdateOperationsInput = NullableDateTimeFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], NullableDateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
exports.NullableDateTimeFieldUpdateOperationsInput = NullableDateTimeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableDateTimeFieldUpdateOperationsInput", {})
], NullableDateTimeFieldUpdateOperationsInput);
