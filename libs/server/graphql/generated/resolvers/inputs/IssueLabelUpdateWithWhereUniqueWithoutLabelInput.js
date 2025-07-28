"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpdateWithWhereUniqueWithoutLabelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelUpdateWithoutLabelInput_1 = require("../inputs/IssueLabelUpdateWithoutLabelInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelUpdateWithWhereUniqueWithoutLabelInput = class IssueLabelUpdateWithWhereUniqueWithoutLabelInput {
};
exports.IssueLabelUpdateWithWhereUniqueWithoutLabelInput = IssueLabelUpdateWithWhereUniqueWithoutLabelInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], IssueLabelUpdateWithWhereUniqueWithoutLabelInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateWithoutLabelInput_1.IssueLabelUpdateWithoutLabelInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateWithoutLabelInput_1.IssueLabelUpdateWithoutLabelInput)
], IssueLabelUpdateWithWhereUniqueWithoutLabelInput.prototype, "data", void 0);
exports.IssueLabelUpdateWithWhereUniqueWithoutLabelInput = IssueLabelUpdateWithWhereUniqueWithoutLabelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpdateWithWhereUniqueWithoutLabelInput", {})
], IssueLabelUpdateWithWhereUniqueWithoutLabelInput);
