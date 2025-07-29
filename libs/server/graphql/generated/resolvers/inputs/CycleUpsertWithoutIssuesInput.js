"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleUpsertWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateWithoutIssuesInput_1 = require("../inputs/CycleCreateWithoutIssuesInput");
const CycleUpdateWithoutIssuesInput_1 = require("../inputs/CycleUpdateWithoutIssuesInput");
const CycleWhereInput_1 = require("../inputs/CycleWhereInput");
let CycleUpsertWithoutIssuesInput = class CycleUpsertWithoutIssuesInput {
};
exports.CycleUpsertWithoutIssuesInput = CycleUpsertWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateWithoutIssuesInput_1.CycleUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleUpdateWithoutIssuesInput_1.CycleUpdateWithoutIssuesInput)
], CycleUpsertWithoutIssuesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateWithoutIssuesInput_1.CycleCreateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleCreateWithoutIssuesInput_1.CycleCreateWithoutIssuesInput)
], CycleUpsertWithoutIssuesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CycleUpsertWithoutIssuesInput.prototype, "where", void 0);
exports.CycleUpsertWithoutIssuesInput = CycleUpsertWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleUpsertWithoutIssuesInput", {})
], CycleUpsertWithoutIssuesInput);
