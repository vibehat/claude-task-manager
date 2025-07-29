"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateManyWithoutAssigneeNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyAssigneeInputEnvelope_1 = require("../inputs/IssueCreateManyAssigneeInputEnvelope");
const IssueCreateOrConnectWithoutAssigneeInput_1 = require("../inputs/IssueCreateOrConnectWithoutAssigneeInput");
const IssueCreateWithoutAssigneeInput_1 = require("../inputs/IssueCreateWithoutAssigneeInput");
const IssueScalarWhereInput_1 = require("../inputs/IssueScalarWhereInput");
const IssueUpdateManyWithWhereWithoutAssigneeInput_1 = require("../inputs/IssueUpdateManyWithWhereWithoutAssigneeInput");
const IssueUpdateWithWhereUniqueWithoutAssigneeInput_1 = require("../inputs/IssueUpdateWithWhereUniqueWithoutAssigneeInput");
const IssueUpsertWithWhereUniqueWithoutAssigneeInput_1 = require("../inputs/IssueUpsertWithWhereUniqueWithoutAssigneeInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateManyWithoutAssigneeNestedInput = class IssueUpdateManyWithoutAssigneeNestedInput {
};
exports.IssueUpdateManyWithoutAssigneeNestedInput = IssueUpdateManyWithoutAssigneeNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutAssigneeInput_1.IssueCreateWithoutAssigneeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutAssigneeInput_1.IssueCreateOrConnectWithoutAssigneeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutAssigneeInput_1.IssueUpsertWithWhereUniqueWithoutAssigneeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyAssigneeInputEnvelope_1.IssueCreateManyAssigneeInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyAssigneeInputEnvelope_1.IssueCreateManyAssigneeInputEnvelope)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutAssigneeInput_1.IssueUpdateWithWhereUniqueWithoutAssigneeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutAssigneeInput_1.IssueUpdateManyWithWhereWithoutAssigneeInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueScalarWhereInput_1.IssueScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutAssigneeNestedInput.prototype, "deleteMany", void 0);
exports.IssueUpdateManyWithoutAssigneeNestedInput = IssueUpdateManyWithoutAssigneeNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateManyWithoutAssigneeNestedInput", {})
], IssueUpdateManyWithoutAssigneeNestedInput);
