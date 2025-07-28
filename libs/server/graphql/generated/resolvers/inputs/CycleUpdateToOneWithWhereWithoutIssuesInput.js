"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleUpdateToOneWithWhereWithoutIssuesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleUpdateWithoutIssuesInput_1 = require("../inputs/CycleUpdateWithoutIssuesInput");
const CycleWhereInput_1 = require("../inputs/CycleWhereInput");
let CycleUpdateToOneWithWhereWithoutIssuesInput = class CycleUpdateToOneWithWhereWithoutIssuesInput {
};
exports.CycleUpdateToOneWithWhereWithoutIssuesInput = CycleUpdateToOneWithWhereWithoutIssuesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], CycleUpdateToOneWithWhereWithoutIssuesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateWithoutIssuesInput_1.CycleUpdateWithoutIssuesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleUpdateWithoutIssuesInput_1.CycleUpdateWithoutIssuesInput)
], CycleUpdateToOneWithWhereWithoutIssuesInput.prototype, "data", void 0);
exports.CycleUpdateToOneWithWhereWithoutIssuesInput = CycleUpdateToOneWithWhereWithoutIssuesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CycleUpdateToOneWithWhereWithoutIssuesInput", {})
], CycleUpdateToOneWithWhereWithoutIssuesInput);
