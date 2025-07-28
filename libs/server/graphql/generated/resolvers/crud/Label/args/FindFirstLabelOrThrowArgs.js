"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLabelOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelOrderByWithRelationInput_1 = require("../../../inputs/LabelOrderByWithRelationInput");
const LabelWhereInput_1 = require("../../../inputs/LabelWhereInput");
const LabelWhereUniqueInput_1 = require("../../../inputs/LabelWhereUniqueInput");
const LabelScalarFieldEnum_1 = require("../../../../enums/LabelScalarFieldEnum");
let FindFirstLabelOrThrowArgs = class FindFirstLabelOrThrowArgs {
};
exports.FindFirstLabelOrThrowArgs = FindFirstLabelOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], FindFirstLabelOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelOrderByWithRelationInput_1.LabelOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLabelOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereUniqueInput_1.LabelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereUniqueInput_1.LabelWhereUniqueInput)
], FindFirstLabelOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLabelOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstLabelOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelScalarFieldEnum_1.LabelScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstLabelOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstLabelOrThrowArgs = FindFirstLabelOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstLabelOrThrowArgs);
