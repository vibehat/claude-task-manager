"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelOrderByWithRelationInput_1 = require("../../../inputs/LabelOrderByWithRelationInput");
const LabelWhereInput_1 = require("../../../inputs/LabelWhereInput");
const LabelWhereUniqueInput_1 = require("../../../inputs/LabelWhereUniqueInput");
const LabelScalarFieldEnum_1 = require("../../../../enums/LabelScalarFieldEnum");
let FindFirstLabelArgs = class FindFirstLabelArgs {
};
exports.FindFirstLabelArgs = FindFirstLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], FindFirstLabelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelOrderByWithRelationInput_1.LabelOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLabelArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereUniqueInput_1.LabelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereUniqueInput_1.LabelWhereUniqueInput)
], FindFirstLabelArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLabelArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLabelArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelScalarFieldEnum_1.LabelScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLabelArgs.prototype, "distinct", void 0);
exports.FindFirstLabelArgs = FindFirstLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstLabelArgs);
