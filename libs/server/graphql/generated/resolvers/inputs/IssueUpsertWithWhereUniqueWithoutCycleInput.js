"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithWhereUniqueWithoutCycleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutCycleInput_1 = require("../inputs/IssueCreateWithoutCycleInput");
const IssueUpdateWithoutCycleInput_1 = require("../inputs/IssueUpdateWithoutCycleInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpsertWithWhereUniqueWithoutCycleInput = class IssueUpsertWithWhereUniqueWithoutCycleInput {
};
exports.IssueUpsertWithWhereUniqueWithoutCycleInput = IssueUpsertWithWhereUniqueWithoutCycleInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpsertWithWhereUniqueWithoutCycleInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutCycleInput_1.IssueUpdateWithoutCycleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutCycleInput_1.IssueUpdateWithoutCycleInput)
], IssueUpsertWithWhereUniqueWithoutCycleInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutCycleInput_1.IssueCreateWithoutCycleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutCycleInput_1.IssueCreateWithoutCycleInput)
], IssueUpsertWithWhereUniqueWithoutCycleInput.prototype, "create", void 0);
exports.IssueUpsertWithWhereUniqueWithoutCycleInput = IssueUpsertWithWhereUniqueWithoutCycleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutCycleInput", {})
], IssueUpsertWithWhereUniqueWithoutCycleInput);
