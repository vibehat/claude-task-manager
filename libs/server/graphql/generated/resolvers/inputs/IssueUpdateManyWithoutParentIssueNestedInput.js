"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateManyWithoutParentIssueNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyParentIssueInputEnvelope_1 = require("../inputs/IssueCreateManyParentIssueInputEnvelope");
const IssueCreateOrConnectWithoutParentIssueInput_1 = require("../inputs/IssueCreateOrConnectWithoutParentIssueInput");
const IssueCreateWithoutParentIssueInput_1 = require("../inputs/IssueCreateWithoutParentIssueInput");
const IssueScalarWhereInput_1 = require("../inputs/IssueScalarWhereInput");
const IssueUpdateManyWithWhereWithoutParentIssueInput_1 = require("../inputs/IssueUpdateManyWithWhereWithoutParentIssueInput");
const IssueUpdateWithWhereUniqueWithoutParentIssueInput_1 = require("../inputs/IssueUpdateWithWhereUniqueWithoutParentIssueInput");
const IssueUpsertWithWhereUniqueWithoutParentIssueInput_1 = require("../inputs/IssueUpsertWithWhereUniqueWithoutParentIssueInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateManyWithoutParentIssueNestedInput = class IssueUpdateManyWithoutParentIssueNestedInput {
};
exports.IssueUpdateManyWithoutParentIssueNestedInput = IssueUpdateManyWithoutParentIssueNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutParentIssueInput_1.IssueCreateWithoutParentIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutParentIssueInput_1.IssueCreateOrConnectWithoutParentIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutParentIssueInput_1.IssueUpsertWithWhereUniqueWithoutParentIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyParentIssueInputEnvelope_1.IssueCreateManyParentIssueInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyParentIssueInputEnvelope_1.IssueCreateManyParentIssueInputEnvelope)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutParentIssueInput_1.IssueUpdateWithWhereUniqueWithoutParentIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutParentIssueInput_1.IssueUpdateManyWithWhereWithoutParentIssueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueScalarWhereInput_1.IssueScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutParentIssueNestedInput.prototype, "deleteMany", void 0);
exports.IssueUpdateManyWithoutParentIssueNestedInput = IssueUpdateManyWithoutParentIssueNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateManyWithoutParentIssueNestedInput", {})
], IssueUpdateManyWithoutParentIssueNestedInput);
