"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpdateManyWithoutIssueNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateManyIssueInputEnvelope_1 = require("../inputs/IssueLabelCreateManyIssueInputEnvelope");
const IssueLabelCreateOrConnectWithoutIssueInput_1 = require("../inputs/IssueLabelCreateOrConnectWithoutIssueInput");
const IssueLabelCreateWithoutIssueInput_1 = require("../inputs/IssueLabelCreateWithoutIssueInput");
const IssueLabelScalarWhereInput_1 = require("../inputs/IssueLabelScalarWhereInput");
const IssueLabelUpdateManyWithWhereWithoutIssueInput_1 = require("../inputs/IssueLabelUpdateManyWithWhereWithoutIssueInput");
const IssueLabelUpdateWithWhereUniqueWithoutIssueInput_1 = require("../inputs/IssueLabelUpdateWithWhereUniqueWithoutIssueInput");
const IssueLabelUpsertWithWhereUniqueWithoutIssueInput_1 = require("../inputs/IssueLabelUpsertWithWhereUniqueWithoutIssueInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelUpdateManyWithoutIssueNestedInput = class IssueLabelUpdateManyWithoutIssueNestedInput {
};
exports.IssueLabelUpdateManyWithoutIssueNestedInput = IssueLabelUpdateManyWithoutIssueNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateWithoutIssueInput_1.IssueLabelCreateWithoutIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelCreateOrConnectWithoutIssueInput_1.IssueLabelCreateOrConnectWithoutIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelUpsertWithWhereUniqueWithoutIssueInput_1.IssueLabelUpsertWithWhereUniqueWithoutIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateManyIssueInputEnvelope_1.IssueLabelCreateManyIssueInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateManyIssueInputEnvelope_1.IssueLabelCreateManyIssueInputEnvelope)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelUpdateWithWhereUniqueWithoutIssueInput_1.IssueLabelUpdateWithWhereUniqueWithoutIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelUpdateManyWithWhereWithoutIssueInput_1.IssueLabelUpdateManyWithWhereWithoutIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput_1.IssueLabelScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueLabelUpdateManyWithoutIssueNestedInput.prototype, "deleteMany", void 0);
exports.IssueLabelUpdateManyWithoutIssueNestedInput = IssueLabelUpdateManyWithoutIssueNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpdateManyWithoutIssueNestedInput", {})
], IssueLabelUpdateManyWithoutIssueNestedInput);
