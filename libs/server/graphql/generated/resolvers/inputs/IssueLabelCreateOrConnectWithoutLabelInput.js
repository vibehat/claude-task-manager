"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateOrConnectWithoutLabelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateWithoutLabelInput_1 = require("../inputs/IssueLabelCreateWithoutLabelInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelCreateOrConnectWithoutLabelInput = class IssueLabelCreateOrConnectWithoutLabelInput {
};
exports.IssueLabelCreateOrConnectWithoutLabelInput = IssueLabelCreateOrConnectWithoutLabelInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], IssueLabelCreateOrConnectWithoutLabelInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateWithoutLabelInput_1.IssueLabelCreateWithoutLabelInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateWithoutLabelInput_1.IssueLabelCreateWithoutLabelInput)
], IssueLabelCreateOrConnectWithoutLabelInput.prototype, "create", void 0);
exports.IssueLabelCreateOrConnectWithoutLabelInput = IssueLabelCreateOrConnectWithoutLabelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateOrConnectWithoutLabelInput", {})
], IssueLabelCreateOrConnectWithoutLabelInput);
