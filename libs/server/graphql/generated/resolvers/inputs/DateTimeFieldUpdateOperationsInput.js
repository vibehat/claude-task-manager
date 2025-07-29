"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let DateTimeFieldUpdateOperationsInput = class DateTimeFieldUpdateOperationsInput {
};
exports.DateTimeFieldUpdateOperationsInput = DateTimeFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], DateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
exports.DateTimeFieldUpdateOperationsInput = DateTimeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DateTimeFieldUpdateOperationsInput", {})
], DateTimeFieldUpdateOperationsInput);
