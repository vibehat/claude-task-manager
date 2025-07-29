"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithWhereUniqueWithoutParentIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutParentIssueInput_1 = require("../inputs/IssueCreateWithoutParentIssueInput");
const IssueUpdateWithoutParentIssueInput_1 = require("../inputs/IssueUpdateWithoutParentIssueInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpsertWithWhereUniqueWithoutParentIssueInput = class IssueUpsertWithWhereUniqueWithoutParentIssueInput {
};
exports.IssueUpsertWithWhereUniqueWithoutParentIssueInput = IssueUpsertWithWhereUniqueWithoutParentIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpsertWithWhereUniqueWithoutParentIssueInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutParentIssueInput_1.IssueUpdateWithoutParentIssueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutParentIssueInput_1.IssueUpdateWithoutParentIssueInput)
], IssueUpsertWithWhereUniqueWithoutParentIssueInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutParentIssueInput_1.IssueCreateWithoutParentIssueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutParentIssueInput_1.IssueCreateWithoutParentIssueInput)
], IssueUpsertWithWhereUniqueWithoutParentIssueInput.prototype, "create", void 0);
exports.IssueUpsertWithWhereUniqueWithoutParentIssueInput = IssueUpsertWithWhereUniqueWithoutParentIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutParentIssueInput", {})
], IssueUpsertWithWhereUniqueWithoutParentIssueInput);
