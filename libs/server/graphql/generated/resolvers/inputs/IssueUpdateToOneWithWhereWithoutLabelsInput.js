"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateToOneWithWhereWithoutLabelsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutLabelsInput_1 = require("../inputs/IssueUpdateWithoutLabelsInput");
const IssueWhereInput_1 = require("../inputs/IssueWhereInput");
let IssueUpdateToOneWithWhereWithoutLabelsInput = class IssueUpdateToOneWithWhereWithoutLabelsInput {
};
exports.IssueUpdateToOneWithWhereWithoutLabelsInput = IssueUpdateToOneWithWhereWithoutLabelsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereInput_1.IssueWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereInput_1.IssueWhereInput)
], IssueUpdateToOneWithWhereWithoutLabelsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutLabelsInput_1.IssueUpdateWithoutLabelsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutLabelsInput_1.IssueUpdateWithoutLabelsInput)
], IssueUpdateToOneWithWhereWithoutLabelsInput.prototype, "data", void 0);
exports.IssueUpdateToOneWithWhereWithoutLabelsInput = IssueUpdateToOneWithWhereWithoutLabelsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateToOneWithWhereWithoutLabelsInput", {})
], IssueUpdateToOneWithWhereWithoutLabelsInput);
