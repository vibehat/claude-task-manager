"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithWhereUniqueWithoutIssueStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutIssueStatusInput_1 = require("../inputs/IssueCreateWithoutIssueStatusInput");
const IssueUpdateWithoutIssueStatusInput_1 = require("../inputs/IssueUpdateWithoutIssueStatusInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpsertWithWhereUniqueWithoutIssueStatusInput = class IssueUpsertWithWhereUniqueWithoutIssueStatusInput {
};
exports.IssueUpsertWithWhereUniqueWithoutIssueStatusInput = IssueUpsertWithWhereUniqueWithoutIssueStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpsertWithWhereUniqueWithoutIssueStatusInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutIssueStatusInput_1.IssueUpdateWithoutIssueStatusInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutIssueStatusInput_1.IssueUpdateWithoutIssueStatusInput)
], IssueUpsertWithWhereUniqueWithoutIssueStatusInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutIssueStatusInput_1.IssueCreateWithoutIssueStatusInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutIssueStatusInput_1.IssueCreateWithoutIssueStatusInput)
], IssueUpsertWithWhereUniqueWithoutIssueStatusInput.prototype, "create", void 0);
exports.IssueUpsertWithWhereUniqueWithoutIssueStatusInput = IssueUpsertWithWhereUniqueWithoutIssueStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutIssueStatusInput", {})
], IssueUpsertWithWhereUniqueWithoutIssueStatusInput);
