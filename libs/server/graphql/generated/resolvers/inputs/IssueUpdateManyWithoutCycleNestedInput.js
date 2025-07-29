"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateManyWithoutCycleNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyCycleInputEnvelope_1 = require("../inputs/IssueCreateManyCycleInputEnvelope");
const IssueCreateOrConnectWithoutCycleInput_1 = require("../inputs/IssueCreateOrConnectWithoutCycleInput");
const IssueCreateWithoutCycleInput_1 = require("../inputs/IssueCreateWithoutCycleInput");
const IssueScalarWhereInput_1 = require("../inputs/IssueScalarWhereInput");
const IssueUpdateManyWithWhereWithoutCycleInput_1 = require("../inputs/IssueUpdateManyWithWhereWithoutCycleInput");
const IssueUpdateWithWhereUniqueWithoutCycleInput_1 = require("../inputs/IssueUpdateWithWhereUniqueWithoutCycleInput");
const IssueUpsertWithWhereUniqueWithoutCycleInput_1 = require("../inputs/IssueUpsertWithWhereUniqueWithoutCycleInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateManyWithoutCycleNestedInput = class IssueUpdateManyWithoutCycleNestedInput {
};
exports.IssueUpdateManyWithoutCycleNestedInput = IssueUpdateManyWithoutCycleNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutCycleInput_1.IssueCreateWithoutCycleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutCycleInput_1.IssueCreateOrConnectWithoutCycleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutCycleInput_1.IssueUpsertWithWhereUniqueWithoutCycleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyCycleInputEnvelope_1.IssueCreateManyCycleInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyCycleInputEnvelope_1.IssueCreateManyCycleInputEnvelope)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutCycleInput_1.IssueUpdateWithWhereUniqueWithoutCycleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutCycleInput_1.IssueUpdateManyWithWhereWithoutCycleInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueScalarWhereInput_1.IssueScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutCycleNestedInput.prototype, "deleteMany", void 0);
exports.IssueUpdateManyWithoutCycleNestedInput = IssueUpdateManyWithoutCycleNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateManyWithoutCycleNestedInput", {})
], IssueUpdateManyWithoutCycleNestedInput);
