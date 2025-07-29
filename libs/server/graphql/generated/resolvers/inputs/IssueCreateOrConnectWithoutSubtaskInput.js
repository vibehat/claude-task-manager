"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCreateOrConnectWithoutSubtaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutSubtaskInput_1 = require("../inputs/IssueCreateWithoutSubtaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueCreateOrConnectWithoutSubtaskInput = class IssueCreateOrConnectWithoutSubtaskInput {
};
exports.IssueCreateOrConnectWithoutSubtaskInput = IssueCreateOrConnectWithoutSubtaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueCreateOrConnectWithoutSubtaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutSubtaskInput_1.IssueCreateWithoutSubtaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutSubtaskInput_1.IssueCreateWithoutSubtaskInput)
], IssueCreateOrConnectWithoutSubtaskInput.prototype, "create", void 0);
exports.IssueCreateOrConnectWithoutSubtaskInput = IssueCreateOrConnectWithoutSubtaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueCreateOrConnectWithoutSubtaskInput", {})
], IssueCreateOrConnectWithoutSubtaskInput);
