"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpsertWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateWithoutProjectInput_1 = require("../inputs/IssueCreateWithoutProjectInput");
const IssueUpdateWithoutProjectInput_1 = require("../inputs/IssueUpdateWithoutProjectInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpsertWithWhereUniqueWithoutProjectInput = class IssueUpsertWithWhereUniqueWithoutProjectInput {
};
exports.IssueUpsertWithWhereUniqueWithoutProjectInput = IssueUpsertWithWhereUniqueWithoutProjectInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpsertWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateWithoutProjectInput_1.IssueUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueUpdateWithoutProjectInput_1.IssueUpdateWithoutProjectInput)
], IssueUpsertWithWhereUniqueWithoutProjectInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutProjectInput_1.IssueCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutProjectInput_1.IssueCreateWithoutProjectInput)
], IssueUpsertWithWhereUniqueWithoutProjectInput.prototype, "create", void 0);
exports.IssueUpsertWithWhereUniqueWithoutProjectInput = IssueUpsertWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutProjectInput", {})
], IssueUpsertWithWhereUniqueWithoutProjectInput);
