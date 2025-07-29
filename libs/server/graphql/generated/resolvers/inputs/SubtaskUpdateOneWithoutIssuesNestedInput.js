"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtaskUpdateOneWithoutIssuesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SubtaskCreateOrConnectWithoutIssuesInput_1 = require("../inputs/SubtaskCreateOrConnectWithoutIssuesInput");
const SubtaskCreateWithoutIssuesInput_1 = require("../inputs/SubtaskCreateWithoutIssuesInput");
const SubtaskUpdateToOneWithWhereWithoutIssuesInput_1 = require("../inputs/SubtaskUpdateToOneWithWhereWithoutIssuesInput");
const SubtaskUpsertWithoutIssuesInput_1 = require("../inputs/SubtaskUpsertWithoutIssuesInput");
const SubtaskWhereInput_1 = require("../inputs/SubtaskWhereInput");
const SubtaskWhereUniqueInput_1 = require("../inputs/SubtaskWhereUniqueInput");
let SubtaskUpdateOneWithoutIssuesNestedInput = class SubtaskUpdateOneWithoutIssuesNestedInput {
};
exports.SubtaskUpdateOneWithoutIssuesNestedInput = SubtaskUpdateOneWithoutIssuesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateWithoutIssuesInput_1.SubtaskCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateWithoutIssuesInput_1.SubtaskCreateWithoutIssuesInput)
], SubtaskUpdateOneWithoutIssuesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskCreateOrConnectWithoutIssuesInput_1.SubtaskCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskCreateOrConnectWithoutIssuesInput_1.SubtaskCreateOrConnectWithoutIssuesInput)
], SubtaskUpdateOneWithoutIssuesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpsertWithoutIssuesInput_1.SubtaskUpsertWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskUpsertWithoutIssuesInput_1.SubtaskUpsertWithoutIssuesInput)
], SubtaskUpdateOneWithoutIssuesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], SubtaskUpdateOneWithoutIssuesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereInput_1.SubtaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereInput_1.SubtaskWhereInput)
], SubtaskUpdateOneWithoutIssuesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskWhereUniqueInput_1.SubtaskWhereUniqueInput)
], SubtaskUpdateOneWithoutIssuesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SubtaskUpdateToOneWithWhereWithoutIssuesInput_1.SubtaskUpdateToOneWithWhereWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SubtaskUpdateToOneWithWhereWithoutIssuesInput_1.SubtaskUpdateToOneWithWhereWithoutIssuesInput)
], SubtaskUpdateOneWithoutIssuesNestedInput.prototype, "update", void 0);
exports.SubtaskUpdateOneWithoutIssuesNestedInput = SubtaskUpdateOneWithoutIssuesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SubtaskUpdateOneWithoutIssuesNestedInput", {})
], SubtaskUpdateOneWithoutIssuesNestedInput);
