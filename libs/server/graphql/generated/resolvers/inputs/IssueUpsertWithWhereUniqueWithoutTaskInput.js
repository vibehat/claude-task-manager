"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithWhereUniqueWithoutTaskInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutTaskInput_1 = require("../inputs/IssueCreateWithoutTaskInput");
const IssueUpdateWithoutTaskInput_1 = require("../inputs/IssueUpdateWithoutTaskInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpsertWithWhereUniqueWithoutTaskInput = class IssueUpsertWithWhereUniqueWithoutTaskInput {
};
exports.IssueUpsertWithWhereUniqueWithoutTaskInput = IssueUpsertWithWhereUniqueWithoutTaskInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpsertWithWhereUniqueWithoutTaskInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutTaskInput_1.IssueUpdateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutTaskInput_1.IssueUpdateWithoutTaskInput)
], IssueUpsertWithWhereUniqueWithoutTaskInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutTaskInput_1.IssueCreateWithoutTaskInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutTaskInput_1.IssueCreateWithoutTaskInput)
], IssueUpsertWithWhereUniqueWithoutTaskInput.prototype, "create", void 0);
exports.IssueUpsertWithWhereUniqueWithoutTaskInput = IssueUpsertWithWhereUniqueWithoutTaskInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutTaskInput", {})
], IssueUpsertWithWhereUniqueWithoutTaskInput);
