"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpsertWithWhereUniqueWithoutLabelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateWithoutLabelInput_1 = require("../inputs/IssueLabelCreateWithoutLabelInput");
const IssueLabelUpdateWithoutLabelInput_1 = require("../inputs/IssueLabelUpdateWithoutLabelInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelUpsertWithWhereUniqueWithoutLabelInput = class IssueLabelUpsertWithWhereUniqueWithoutLabelInput {
};
exports.IssueLabelUpsertWithWhereUniqueWithoutLabelInput = IssueLabelUpsertWithWhereUniqueWithoutLabelInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], IssueLabelUpsertWithWhereUniqueWithoutLabelInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateWithoutLabelInput_1.IssueLabelUpdateWithoutLabelInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateWithoutLabelInput_1.IssueLabelUpdateWithoutLabelInput)
], IssueLabelUpsertWithWhereUniqueWithoutLabelInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateWithoutLabelInput_1.IssueLabelCreateWithoutLabelInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateWithoutLabelInput_1.IssueLabelCreateWithoutLabelInput)
], IssueLabelUpsertWithWhereUniqueWithoutLabelInput.prototype, "create", void 0);
exports.IssueLabelUpsertWithWhereUniqueWithoutLabelInput = IssueLabelUpsertWithWhereUniqueWithoutLabelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpsertWithWhereUniqueWithoutLabelInput", {})
], IssueLabelUpsertWithWhereUniqueWithoutLabelInput);
