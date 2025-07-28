"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithWhereUniqueWithoutParentIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutParentIssueInput_1 = require("../inputs/IssueUpdateWithoutParentIssueInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateWithWhereUniqueWithoutParentIssueInput = class IssueUpdateWithWhereUniqueWithoutParentIssueInput {
};
exports.IssueUpdateWithWhereUniqueWithoutParentIssueInput = IssueUpdateWithWhereUniqueWithoutParentIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateWithWhereUniqueWithoutParentIssueInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutParentIssueInput_1.IssueUpdateWithoutParentIssueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutParentIssueInput_1.IssueUpdateWithoutParentIssueInput)
], IssueUpdateWithWhereUniqueWithoutParentIssueInput.prototype, "data", void 0);
exports.IssueUpdateWithWhereUniqueWithoutParentIssueInput = IssueUpdateWithWhereUniqueWithoutParentIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutParentIssueInput", {})
], IssueUpdateWithWhereUniqueWithoutParentIssueInput);
