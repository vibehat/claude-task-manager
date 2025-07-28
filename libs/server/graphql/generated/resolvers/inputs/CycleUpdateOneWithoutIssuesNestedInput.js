"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleUpdateOneWithoutIssuesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateOrConnectWithoutIssuesInput_1 = require("../inputs/CycleCreateOrConnectWithoutIssuesInput");
const CycleCreateWithoutIssuesInput_1 = require("../inputs/CycleCreateWithoutIssuesInput");
const CycleUpdateToOneWithWhereWithoutIssuesInput_1 = require("../inputs/CycleUpdateToOneWithWhereWithoutIssuesInput");
const CycleUpsertWithoutIssuesInput_1 = require("../inputs/CycleUpsertWithoutIssuesInput");
const CycleWhereInput_1 = require("../inputs/CycleWhereInput");
const CycleWhereUniqueInput_1 = require("../inputs/CycleWhereUniqueInput");
let CycleUpdateOneWithoutIssuesNestedInput = class CycleUpdateOneWithoutIssuesNestedInput {
};
exports.CycleUpdateOneWithoutIssuesNestedInput = CycleUpdateOneWithoutIssuesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateWithoutIssuesInput_1.CycleCreateWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateWithoutIssuesInput_1.CycleCreateWithoutIssuesInput)
], CycleUpdateOneWithoutIssuesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateOrConnectWithoutIssuesInput_1.CycleCreateOrConnectWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleCreateOrConnectWithoutIssuesInput_1.CycleCreateOrConnectWithoutIssuesInput)
], CycleUpdateOneWithoutIssuesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpsertWithoutIssuesInput_1.CycleUpsertWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleUpsertWithoutIssuesInput_1.CycleUpsertWithoutIssuesInput)
], CycleUpdateOneWithoutIssuesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CycleUpdateOneWithoutIssuesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CycleUpdateOneWithoutIssuesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], CycleUpdateOneWithoutIssuesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateToOneWithWhereWithoutIssuesInput_1.CycleUpdateToOneWithWhereWithoutIssuesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleUpdateToOneWithWhereWithoutIssuesInput_1.CycleUpdateToOneWithWhereWithoutIssuesInput)
], CycleUpdateOneWithoutIssuesNestedInput.prototype, "update", void 0);
exports.CycleUpdateOneWithoutIssuesNestedInput = CycleUpdateOneWithoutIssuesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleUpdateOneWithoutIssuesNestedInput", {})
], CycleUpdateOneWithoutIssuesNestedInput);
