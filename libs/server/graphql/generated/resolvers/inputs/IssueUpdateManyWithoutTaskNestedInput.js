"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateManyWithoutTaskNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyTaskInputEnvelope_1 = require("../inputs/IssueCreateManyTaskInputEnvelope");
const IssueCreateOrConnectWithoutTaskInput_1 = require("../inputs/IssueCreateOrConnectWithoutTaskInput");
const IssueCreateWithoutTaskInput_1 = require("../inputs/IssueCreateWithoutTaskInput");
const IssueScalarWhereInput_1 = require("../inputs/IssueScalarWhereInput");
const IssueUpdateManyWithWhereWithoutTaskInput_1 = require("../inputs/IssueUpdateManyWithWhereWithoutTaskInput");
const IssueUpdateWithWhereUniqueWithoutTaskInput_1 = require("../inputs/IssueUpdateWithWhereUniqueWithoutTaskInput");
const IssueUpsertWithWhereUniqueWithoutTaskInput_1 = require("../inputs/IssueUpsertWithWhereUniqueWithoutTaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateManyWithoutTaskNestedInput = class IssueUpdateManyWithoutTaskNestedInput {
};
exports.IssueUpdateManyWithoutTaskNestedInput = IssueUpdateManyWithoutTaskNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutTaskInput_1.IssueCreateWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutTaskInput_1.IssueCreateOrConnectWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutTaskInput_1.IssueUpsertWithWhereUniqueWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyTaskInputEnvelope_1.IssueCreateManyTaskInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyTaskInputEnvelope_1.IssueCreateManyTaskInputEnvelope)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutTaskInput_1.IssueUpdateWithWhereUniqueWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutTaskInput_1.IssueUpdateManyWithWhereWithoutTaskInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueScalarWhereInput_1.IssueScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutTaskNestedInput.prototype, "deleteMany", void 0);
exports.IssueUpdateManyWithoutTaskNestedInput = IssueUpdateManyWithoutTaskNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateManyWithoutTaskNestedInput", {})
], IssueUpdateManyWithoutTaskNestedInput);
