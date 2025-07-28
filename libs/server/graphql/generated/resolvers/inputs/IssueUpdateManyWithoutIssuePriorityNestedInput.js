"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateManyWithoutIssuePriorityNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyIssuePriorityInputEnvelope_1 = require("../inputs/IssueCreateManyIssuePriorityInputEnvelope");
const IssueCreateOrConnectWithoutIssuePriorityInput_1 = require("../inputs/IssueCreateOrConnectWithoutIssuePriorityInput");
const IssueCreateWithoutIssuePriorityInput_1 = require("../inputs/IssueCreateWithoutIssuePriorityInput");
const IssueScalarWhereInput_1 = require("../inputs/IssueScalarWhereInput");
const IssueUpdateManyWithWhereWithoutIssuePriorityInput_1 = require("../inputs/IssueUpdateManyWithWhereWithoutIssuePriorityInput");
const IssueUpdateWithWhereUniqueWithoutIssuePriorityInput_1 = require("../inputs/IssueUpdateWithWhereUniqueWithoutIssuePriorityInput");
const IssueUpsertWithWhereUniqueWithoutIssuePriorityInput_1 = require("../inputs/IssueUpsertWithWhereUniqueWithoutIssuePriorityInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateManyWithoutIssuePriorityNestedInput = class IssueUpdateManyWithoutIssuePriorityNestedInput {
};
exports.IssueUpdateManyWithoutIssuePriorityNestedInput = IssueUpdateManyWithoutIssuePriorityNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutIssuePriorityInput_1.IssueCreateWithoutIssuePriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutIssuePriorityInput_1.IssueCreateOrConnectWithoutIssuePriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutIssuePriorityInput_1.IssueUpsertWithWhereUniqueWithoutIssuePriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyIssuePriorityInputEnvelope_1.IssueCreateManyIssuePriorityInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyIssuePriorityInputEnvelope_1.IssueCreateManyIssuePriorityInputEnvelope)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutIssuePriorityInput_1.IssueUpdateWithWhereUniqueWithoutIssuePriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutIssuePriorityInput_1.IssueUpdateManyWithWhereWithoutIssuePriorityInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueScalarWhereInput_1.IssueScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueUpdateManyWithoutIssuePriorityNestedInput.prototype, "deleteMany", void 0);
exports.IssueUpdateManyWithoutIssuePriorityNestedInput = IssueUpdateManyWithoutIssuePriorityNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateManyWithoutIssuePriorityNestedInput", {})
], IssueUpdateManyWithoutIssuePriorityNestedInput);
