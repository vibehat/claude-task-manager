"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpsertWithWhereUniqueWithoutIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateWithoutIssueInput_1 = require("../inputs/IssueLabelCreateWithoutIssueInput");
const IssueLabelUpdateWithoutIssueInput_1 = require("../inputs/IssueLabelUpdateWithoutIssueInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelUpsertWithWhereUniqueWithoutIssueInput = class IssueLabelUpsertWithWhereUniqueWithoutIssueInput {
};
exports.IssueLabelUpsertWithWhereUniqueWithoutIssueInput = IssueLabelUpsertWithWhereUniqueWithoutIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], IssueLabelUpsertWithWhereUniqueWithoutIssueInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateWithoutIssueInput_1.IssueLabelUpdateWithoutIssueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateWithoutIssueInput_1.IssueLabelUpdateWithoutIssueInput)
], IssueLabelUpsertWithWhereUniqueWithoutIssueInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateWithoutIssueInput_1.IssueLabelCreateWithoutIssueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateWithoutIssueInput_1.IssueLabelCreateWithoutIssueInput)
], IssueLabelUpsertWithWhereUniqueWithoutIssueInput.prototype, "create", void 0);
exports.IssueLabelUpsertWithWhereUniqueWithoutIssueInput = IssueLabelUpsertWithWhereUniqueWithoutIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpsertWithWhereUniqueWithoutIssueInput", {})
], IssueLabelUpsertWithWhereUniqueWithoutIssueInput);
