"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedManyWithoutIssueStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateManyIssueStatusInputEnvelope_1 = require("../inputs/IssueCreateManyIssueStatusInputEnvelope");
const IssueCreateOrConnectWithoutIssueStatusInput_1 = require("../inputs/IssueCreateOrConnectWithoutIssueStatusInput");
const IssueCreateWithoutIssueStatusInput_1 = require("../inputs/IssueCreateWithoutIssueStatusInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedManyWithoutIssueStatusInput = class IssueCreateNestedManyWithoutIssueStatusInput {
};
exports.IssueCreateNestedManyWithoutIssueStatusInput = IssueCreateNestedManyWithoutIssueStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateWithoutIssueStatusInput_1.IssueCreateWithoutIssueStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutIssueStatusInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutIssueStatusInput_1.IssueCreateOrConnectWithoutIssueStatusInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutIssueStatusInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateManyIssueStatusInputEnvelope_1.IssueCreateManyIssueStatusInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateManyIssueStatusInputEnvelope_1.IssueCreateManyIssueStatusInputEnvelope)
], IssueCreateNestedManyWithoutIssueStatusInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueWhereUniqueInput_1.IssueWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IssueCreateNestedManyWithoutIssueStatusInput.prototype, "connect", void 0);
exports.IssueCreateNestedManyWithoutIssueStatusInput = IssueCreateNestedManyWithoutIssueStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedManyWithoutIssueStatusInput", {})
], IssueCreateNestedManyWithoutIssueStatusInput);
