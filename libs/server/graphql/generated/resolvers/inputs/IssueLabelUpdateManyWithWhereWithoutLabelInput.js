"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpdateManyWithWhereWithoutLabelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelScalarWhereInput_1 = require("../inputs/IssueLabelScalarWhereInput");
const IssueLabelUpdateManyMutationInput_1 = require("../inputs/IssueLabelUpdateManyMutationInput");
let IssueLabelUpdateManyWithWhereWithoutLabelInput = class IssueLabelUpdateManyWithWhereWithoutLabelInput {
};
exports.IssueLabelUpdateManyWithWhereWithoutLabelInput = IssueLabelUpdateManyWithWhereWithoutLabelInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelScalarWhereInput_1.IssueLabelScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelScalarWhereInput_1.IssueLabelScalarWhereInput)
], IssueLabelUpdateManyWithWhereWithoutLabelInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateManyMutationInput_1.IssueLabelUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateManyMutationInput_1.IssueLabelUpdateManyMutationInput)
], IssueLabelUpdateManyWithWhereWithoutLabelInput.prototype, "data", void 0);
exports.IssueLabelUpdateManyWithWhereWithoutLabelInput = IssueLabelUpdateManyWithWhereWithoutLabelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpdateManyWithWhereWithoutLabelInput", {})
], IssueLabelUpdateManyWithWhereWithoutLabelInput);
