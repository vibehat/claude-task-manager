"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithWhereUniqueWithoutIssueStatusInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutIssueStatusInput_1 = require("../inputs/IssueUpdateWithoutIssueStatusInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateWithWhereUniqueWithoutIssueStatusInput = class IssueUpdateWithWhereUniqueWithoutIssueStatusInput {
};
exports.IssueUpdateWithWhereUniqueWithoutIssueStatusInput = IssueUpdateWithWhereUniqueWithoutIssueStatusInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateWithWhereUniqueWithoutIssueStatusInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutIssueStatusInput_1.IssueUpdateWithoutIssueStatusInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutIssueStatusInput_1.IssueUpdateWithoutIssueStatusInput)
], IssueUpdateWithWhereUniqueWithoutIssueStatusInput.prototype, "data", void 0);
exports.IssueUpdateWithWhereUniqueWithoutIssueStatusInput = IssueUpdateWithWhereUniqueWithoutIssueStatusInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutIssueStatusInput", {})
], IssueUpdateWithWhereUniqueWithoutIssueStatusInput);
