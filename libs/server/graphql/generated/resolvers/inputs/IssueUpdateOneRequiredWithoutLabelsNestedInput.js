"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateOneRequiredWithoutLabelsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueCreateOrConnectWithoutLabelsInput_1 = require("../inputs/IssueCreateOrConnectWithoutLabelsInput");
const IssueCreateWithoutLabelsInput_1 = require("../inputs/IssueCreateWithoutLabelsInput");
const IssueUpdateToOneWithWhereWithoutLabelsInput_1 = require("../inputs/IssueUpdateToOneWithWhereWithoutLabelsInput");
const IssueUpsertWithoutLabelsInput_1 = require("../inputs/IssueUpsertWithoutLabelsInput");
const IssueWhereUniqueInput_1 = require("../inputs/IssueWhereUniqueInput");
let IssueUpdateOneRequiredWithoutLabelsNestedInput = class IssueUpdateOneRequiredWithoutLabelsNestedInput {
};
exports.IssueUpdateOneRequiredWithoutLabelsNestedInput = IssueUpdateOneRequiredWithoutLabelsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateWithoutLabelsInput_1.IssueCreateWithoutLabelsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateWithoutLabelsInput_1.IssueCreateWithoutLabelsInput)
], IssueUpdateOneRequiredWithoutLabelsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueCreateOrConnectWithoutLabelsInput_1.IssueCreateOrConnectWithoutLabelsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueCreateOrConnectWithoutLabelsInput_1.IssueCreateOrConnectWithoutLabelsInput)
], IssueUpdateOneRequiredWithoutLabelsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpsertWithoutLabelsInput_1.IssueUpsertWithoutLabelsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpsertWithoutLabelsInput_1.IssueUpsertWithoutLabelsInput)
], IssueUpdateOneRequiredWithoutLabelsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueWhereUniqueInput_1.IssueWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueWhereUniqueInput_1.IssueWhereUniqueInput)
], IssueUpdateOneRequiredWithoutLabelsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueUpdateToOneWithWhereWithoutLabelsInput_1.IssueUpdateToOneWithWhereWithoutLabelsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueUpdateToOneWithWhereWithoutLabelsInput_1.IssueUpdateToOneWithWhereWithoutLabelsInput)
], IssueUpdateOneRequiredWithoutLabelsNestedInput.prototype, "update", void 0);
exports.IssueUpdateOneRequiredWithoutLabelsNestedInput = IssueUpdateOneRequiredWithoutLabelsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IssueUpdateOneRequiredWithoutLabelsNestedInput", {})
], IssueUpdateOneRequiredWithoutLabelsNestedInput);
