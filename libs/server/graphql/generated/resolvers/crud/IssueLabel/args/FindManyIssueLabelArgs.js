"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelOrderByWithRelationInput_1 = require("../../../inputs/IssueLabelOrderByWithRelationInput");
const IssueLabelWhereInput_1 = require("../../../inputs/IssueLabelWhereInput");
const IssueLabelWhereUniqueInput_1 = require("../../../inputs/IssueLabelWhereUniqueInput");
const IssueLabelScalarFieldEnum_1 = require("../../../../enums/IssueLabelScalarFieldEnum");
let FindManyIssueLabelArgs = class FindManyIssueLabelArgs {
};
exports.FindManyIssueLabelArgs = FindManyIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereInput_1.IssueLabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereInput_1.IssueLabelWhereInput)
], FindManyIssueLabelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelOrderByWithRelationInput_1.IssueLabelOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyIssueLabelArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], FindManyIssueLabelArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyIssueLabelArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyIssueLabelArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelScalarFieldEnum_1.IssueLabelScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyIssueLabelArgs.prototype, "distinct", void 0);
exports.FindManyIssueLabelArgs = FindManyIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyIssueLabelArgs);
