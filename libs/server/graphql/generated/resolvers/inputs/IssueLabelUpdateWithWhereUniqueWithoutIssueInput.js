"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueLabelUpdateWithWhereUniqueWithoutIssueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelUpdateWithoutIssueInput_1 = require("../inputs/IssueLabelUpdateWithoutIssueInput");
const IssueLabelWhereUniqueInput_1 = require("../inputs/IssueLabelWhereUniqueInput");
let IssueLabelUpdateWithWhereUniqueWithoutIssueInput = class IssueLabelUpdateWithWhereUniqueWithoutIssueInput {
};
exports.IssueLabelUpdateWithWhereUniqueWithoutIssueInput = IssueLabelUpdateWithWhereUniqueWithoutIssueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], IssueLabelUpdateWithWhereUniqueWithoutIssueInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateWithoutIssueInput_1.IssueLabelUpdateWithoutIssueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateWithoutIssueInput_1.IssueLabelUpdateWithoutIssueInput)
], IssueLabelUpdateWithWhereUniqueWithoutIssueInput.prototype, "data", void 0);
exports.IssueLabelUpdateWithWhereUniqueWithoutIssueInput = IssueLabelUpdateWithWhereUniqueWithoutIssueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueLabelUpdateWithWhereUniqueWithoutIssueInput", {})
], IssueLabelUpdateWithWhereUniqueWithoutIssueInput);
