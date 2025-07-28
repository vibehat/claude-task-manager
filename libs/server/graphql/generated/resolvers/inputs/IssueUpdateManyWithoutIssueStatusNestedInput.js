"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateManyWithoutIssueStatusNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyIssueStatusInputEnvelope_1 = require("../inputs/IssueCreateManyIssueStatusInputEnvelope");
const IssueCreateOrConnectWithoutIssueStatusInput_1 = require("../inputs/IssueCreateOrConnectWithoutIssueStatusInput");
const IssueCreateWithoutIssueStatusInput_1 = require("../inputs/IssueCreateWithoutIssueStatusInput");
const IssueScalarWhereInput_1 = require("../inputs/IssueScalarWhereInput");
const IssueUpdateManyWithWhereWithoutIssueStatusInput_1 = require("../inputs/IssueUpdateManyWithWhereWithoutIssueStatusInput");
const IssueUpdateWithWhereUniqueWithoutIssueStatusInput_1 = require("../inputs/IssueUpdateWithWhereUniqueWithoutIssueStatusInput");
const IssueUpsertWithWhereUniqueWithoutIssueStatusInput_1 = require("../inputs/IssueUpsertWithWhereUniqueWithoutIssueStatusInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateManyWithoutIssueStatusNestedInput = class IssueUpdateManyWithoutIssueStatusNestedInput {
};
exports.IssueUpdateManyWithoutIssueStatusNestedInput = IssueUpdateManyWithoutIssueStatusNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutIssueStatusInput_1.IssueCreateWithoutIssueStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutIssueStatusInput_1.IssueCreateOrConnectWithoutIssueStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutIssueStatusInput_1.IssueUpsertWithWhereUniqueWithoutIssueStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyIssueStatusInputEnvelope_1.IssueCreateManyIssueStatusInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyIssueStatusInputEnvelope_1.IssueCreateManyIssueStatusInputEnvelope)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutIssueStatusInput_1.IssueUpdateWithWhereUniqueWithoutIssueStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutIssueStatusInput_1.IssueUpdateManyWithWhereWithoutIssueStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueScalarWhereInput_1.IssueScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssueStatusNestedInput.prototype, "deleteMany", void 0);
exports.IssueUpdateManyWithoutIssueStatusNestedInput = IssueUpdateManyWithoutIssueStatusNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateManyWithoutIssueStatusNestedInput", {})
], IssueUpdateManyWithoutIssueStatusNestedInput);
