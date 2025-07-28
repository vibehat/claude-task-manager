"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateManyWithoutSubtaskNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManySubtaskInputEnvelope_1 = require("../inputs/IssueCreateManySubtaskInputEnvelope");
const IssueCreateOrConnectWithoutSubtaskInput_1 = require("../inputs/IssueCreateOrConnectWithoutSubtaskInput");
const IssueCreateWithoutSubtaskInput_1 = require("../inputs/IssueCreateWithoutSubtaskInput");
const IssueScalarWhereInput_1 = require("../inputs/IssueScalarWhereInput");
const IssueUpdateManyWithWhereWithoutSubtaskInput_1 = require("../inputs/IssueUpdateManyWithWhereWithoutSubtaskInput");
const IssueUpdateWithWhereUniqueWithoutSubtaskInput_1 = require("../inputs/IssueUpdateWithWhereUniqueWithoutSubtaskInput");
const IssueUpsertWithWhereUniqueWithoutSubtaskInput_1 = require("../inputs/IssueUpsertWithWhereUniqueWithoutSubtaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateManyWithoutSubtaskNestedInput = class IssueUpdateManyWithoutSubtaskNestedInput {
};
exports.IssueUpdateManyWithoutSubtaskNestedInput = IssueUpdateManyWithoutSubtaskNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutSubtaskInput_1.IssueCreateWithoutSubtaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutSubtaskInput_1.IssueCreateOrConnectWithoutSubtaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutSubtaskInput_1.IssueUpsertWithWhereUniqueWithoutSubtaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManySubtaskInputEnvelope_1.IssueCreateManySubtaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManySubtaskInputEnvelope_1.IssueCreateManySubtaskInputEnvelope)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutSubtaskInput_1.IssueUpdateWithWhereUniqueWithoutSubtaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutSubtaskInput_1.IssueUpdateManyWithWhereWithoutSubtaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueScalarWhereInput_1.IssueScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutSubtaskNestedInput.prototype, "deleteMany", void 0);
exports.IssueUpdateManyWithoutSubtaskNestedInput = IssueUpdateManyWithoutSubtaskNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateManyWithoutSubtaskNestedInput", {})
], IssueUpdateManyWithoutSubtaskNestedInput);
