"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelCreateNestedManyWithoutLabelInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateManyLabelInputEnvelope_1 = require("../inputs/IssueLabelCreateManyLabelInputEnvelope");
const IssueLabelCreateOrConnectWithoutLabelInput_1 = require("../inputs/IssueLabelCreateOrConnectWithoutLabelInput");
const IssueLabelCreateWithoutLabelInput_1 = require("../inputs/IssueLabelCreateWithoutLabelInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelCreateNestedManyWithoutLabelInput = class IssueLabelCreateNestedManyWithoutLabelInput {
};
exports.IssueLabelCreateNestedManyWithoutLabelInput = IssueLabelCreateNestedManyWithoutLabelInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateWithoutLabelInput_1.IssueLabelCreateWithoutLabelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelCreateNestedManyWithoutLabelInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutLabelInput_1.IssueLabelCreateOrConnectWithoutLabelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelCreateNestedManyWithoutLabelInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateManyLabelInputEnvelope_1.IssueLabelCreateManyLabelInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateManyLabelInputEnvelope_1.IssueLabelCreateManyLabelInputEnvelope)
], IssueLabelCreateNestedManyWithoutLabelInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelCreateNestedManyWithoutLabelInput.prototype, "connect", void 0);
exports.IssueLabelCreateNestedManyWithoutLabelInput = IssueLabelCreateNestedManyWithoutLabelInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelCreateNestedManyWithoutLabelInput", {})
], IssueLabelCreateNestedManyWithoutLabelInput);
