"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableIntFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NullableIntFieldUpdateOperationsInput = class NullableIntFieldUpdateOperationsInput {
};
exports.NullableIntFieldUpdateOperationsInput = NullableIntFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "increment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "decrement", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "multiply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NullableIntFieldUpdateOperationsInput.prototype, "divide", void 0);
exports.NullableIntFieldUpdateOperationsInput = NullableIntFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NullableIntFieldUpdateOperationsInput", {})
], NullableIntFieldUpdateOperationsInput);
