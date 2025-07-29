"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCreateInput_1 = require("../../../inputs/LabelCreateInput");
const LabelUpdateInput_1 = require("../../../inputs/LabelUpdateInput");
const LabelWhereUniqueInput_1 = require("../../../inputs/LabelWhereUniqueInput");
let UpsertOneLabelArgs = class UpsertOneLabelArgs {
};
exports.UpsertOneLabelArgs = UpsertOneLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereUniqueInput_1.LabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelWhereUniqueInput_1.LabelWhereUniqueInput)
], UpsertOneLabelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateInput_1.LabelCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelCreateInput_1.LabelCreateInput)
], UpsertOneLabelArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelUpdateInput_1.LabelUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelUpdateInput_1.LabelUpdateInput)
], UpsertOneLabelArgs.prototype, "update", void 0);
exports.UpsertOneLabelArgs = UpsertOneLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneLabelArgs);
