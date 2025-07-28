"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateWithWhereUniqueWithoutCycleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueUpdateWithoutCycleInput_1 = require("../inputs/IssueUpdateWithoutCycleInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateWithWhereUniqueWithoutCycleInput = class IssueUpdateWithWhereUniqueWithoutCycleInput {
};
exports.IssueUpdateWithWhereUniqueWithoutCycleInput = IssueUpdateWithWhereUniqueWithoutCycleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateWithWhereUniqueWithoutCycleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutCycleInput_1.IssueUpdateWithoutCycleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutCycleInput_1.IssueUpdateWithoutCycleInput)
], IssueUpdateWithWhereUniqueWithoutCycleInput.prototype, "data", void 0);
exports.IssueUpdateWithWhereUniqueWithoutCycleInput = IssueUpdateWithWhereUniqueWithoutCycleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutCycleInput", {})
], IssueUpdateWithWhereUniqueWithoutCycleInput);
