"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateNestedOneWithoutLabelsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateOrConnectWithoutLabelsInput_1 = require("../inputs/IssueCreateOrConnectWithoutLabelsInput");
const IssueCreateWithoutLabelsInput_1 = require("../inputs/IssueCreateWithoutLabelsInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateNestedOneWithoutLabelsInput = class IssueCreateNestedOneWithoutLabelsInput {
};
exports.IssueCreateNestedOneWithoutLabelsInput = IssueCreateNestedOneWithoutLabelsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutLabelsInput_1.IssueCreateWithoutLabelsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutLabelsInput_1.IssueCreateWithoutLabelsInput)
], IssueCreateNestedOneWithoutLabelsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateOrConnectWithoutLabelsInput_1.IssueCreateOrConnectWithoutLabelsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateOrConnectWithoutLabelsInput_1.IssueCreateOrConnectWithoutLabelsInput)
], IssueCreateNestedOneWithoutLabelsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateNestedOneWithoutLabelsInput.prototype, "connect", void 0);
exports.IssueCreateNestedOneWithoutLabelsInput = IssueCreateNestedOneWithoutLabelsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateNestedOneWithoutLabelsInput", {})
], IssueCreateNestedOneWithoutLabelsInput);
