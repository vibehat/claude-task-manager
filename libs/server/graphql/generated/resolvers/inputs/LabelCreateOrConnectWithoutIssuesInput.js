"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelCreateOrConnectWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCreateWithoutIssuesInput_1 = require("../inputs/LabelCreateWithoutIssuesInput");
const LabelWhereUniqueInput_1 = require("../inputs/LabelWhereUniqueInput");
let LabelCreateOrConnectWithoutIssuesInput = class LabelCreateOrConnectWithoutIssuesInput {
};
exports.LabelCreateOrConnectWithoutIssuesInput = LabelCreateOrConnectWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereUniqueInput_1.LabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelWhereUniqueInput_1.LabelWhereUniqueInput)
], LabelCreateOrConnectWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateWithoutIssuesInput_1.LabelCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelCreateWithoutIssuesInput_1.LabelCreateWithoutIssuesInput)
], LabelCreateOrConnectWithoutIssuesInput.prototype, "create", void 0);
exports.LabelCreateOrConnectWithoutIssuesInput = LabelCreateOrConnectWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LabelCreateOrConnectWithoutIssuesInput", {})
], LabelCreateOrConnectWithoutIssuesInput);
