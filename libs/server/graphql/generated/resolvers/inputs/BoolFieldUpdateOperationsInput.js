"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BoolFieldUpdateOperationsInput = class BoolFieldUpdateOperationsInput {
};
exports.BoolFieldUpdateOperationsInput = BoolFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BoolFieldUpdateOperationsInput.prototype, "set", void 0);
exports.BoolFieldUpdateOperationsInput = BoolFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BoolFieldUpdateOperationsInput", {})
], BoolFieldUpdateOperationsInput);
