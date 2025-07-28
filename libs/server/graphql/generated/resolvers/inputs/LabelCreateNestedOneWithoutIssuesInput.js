"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelCreateNestedOneWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCreateOrConnectWithoutIssuesInput_1 = require("../inputs/LabelCreateOrConnectWithoutIssuesInput");
const LabelCreateWithoutIssuesInput_1 = require("../inputs/LabelCreateWithoutIssuesInput");
const LabelWhereUniqueInput_1 = require("../inputs/LabelWhereUniqueInput");
let LabelCreateNestedOneWithoutIssuesInput = class LabelCreateNestedOneWithoutIssuesInput {
};
exports.LabelCreateNestedOneWithoutIssuesInput = LabelCreateNestedOneWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateWithoutIssuesInput_1.LabelCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelCreateWithoutIssuesInput_1.LabelCreateWithoutIssuesInput)
], LabelCreateNestedOneWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateOrConnectWithoutIssuesInput_1.LabelCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelCreateOrConnectWithoutIssuesInput_1.LabelCreateOrConnectWithoutIssuesInput)
], LabelCreateNestedOneWithoutIssuesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereUniqueInput_1.LabelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereUniqueInput_1.LabelWhereUniqueInput)
], LabelCreateNestedOneWithoutIssuesInput.prototype, "connect", void 0);
exports.LabelCreateNestedOneWithoutIssuesInput = LabelCreateNestedOneWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelCreateNestedOneWithoutIssuesInput", {})
], LabelCreateNestedOneWithoutIssuesInput);
