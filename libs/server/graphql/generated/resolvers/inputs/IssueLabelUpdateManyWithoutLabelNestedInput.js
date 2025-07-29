"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpdateManyWithoutLabelNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateManyLabelInputEnvelope_1 = require("../inputs/IssueLabelCreateManyLabelInputEnvelope");
const IssueLabelCreateOrConnectWithoutLabelInput_1 = require("../inputs/IssueLabelCreateOrConnectWithoutLabelInput");
const IssueLabelCreateWithoutLabelInput_1 = require("../inputs/IssueLabelCreateWithoutLabelInput");
const IssueLabelScalarWhereInput_1 = require("../inputs/IssueLabelScalarWhereInput");
const IssueLabelUpdateManyWithWhereWithoutLabelInput_1 = require("../inputs/IssueLabelUpdateManyWithWhereWithoutLabelInput");
const IssueLabelUpdateWithWhereUniqueWithoutLabelInput_1 = require("../inputs/IssueLabelUpdateWithWhereUniqueWithoutLabelInput");
const IssueLabelUpsertWithWhereUniqueWithoutLabelInput_1 = require("../inputs/IssueLabelUpsertWithWhereUniqueWithoutLabelInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelUpdateManyWithoutLabelNestedInput = class IssueLabelUpdateManyWithoutLabelNestedInput {
};
exports.IssueLabelUpdateManyWithoutLabelNestedInput = IssueLabelUpdateManyWithoutLabelNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateWithoutLabelInput_1.IssueLabelCreateWithoutLabelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutLabelInput_1.IssueLabelCreateOrConnectWithoutLabelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelUpsertWithWhereUniqueWithoutLabelInput_1.IssueLabelUpsertWithWhereUniqueWithoutLabelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateManyLabelInputEnvelope_1.IssueLabelCreateManyLabelInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateManyLabelInputEnvelope_1.IssueLabelCreateManyLabelInputEnvelope)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelUpdateWithWhereUniqueWithoutLabelInput_1.IssueLabelUpdateWithWhereUniqueWithoutLabelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelUpdateManyWithWhereWithoutLabelInput_1.IssueLabelUpdateManyWithWhereWithoutLabelInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput_1.IssueLabelScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutLabelNestedInput.prototype, "deleteMany", void 0);
exports.IssueLabelUpdateManyWithoutLabelNestedInput = IssueLabelUpdateManyWithoutLabelNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpdateManyWithoutLabelNestedInput", {})
], IssueLabelUpdateManyWithoutLabelNestedInput);
