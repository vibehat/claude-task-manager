"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithWhereUniqueWithoutSubtaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutSubtaskInput_1 = require("../inputs/IssueUpdateWithoutSubtaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateWithWhereUniqueWithoutSubtaskInput = class IssueUpdateWithWhereUniqueWithoutSubtaskInput {
};
exports.IssueUpdateWithWhereUniqueWithoutSubtaskInput = IssueUpdateWithWhereUniqueWithoutSubtaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateWithWhereUniqueWithoutSubtaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutSubtaskInput_1.IssueUpdateWithoutSubtaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutSubtaskInput_1.IssueUpdateWithoutSubtaskInput)
], IssueUpdateWithWhereUniqueWithoutSubtaskInput.prototype, "data", void 0);
exports.IssueUpdateWithWhereUniqueWithoutSubtaskInput = IssueUpdateWithWhereUniqueWithoutSubtaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutSubtaskInput", {})
], IssueUpdateWithWhereUniqueWithoutSubtaskInput);
