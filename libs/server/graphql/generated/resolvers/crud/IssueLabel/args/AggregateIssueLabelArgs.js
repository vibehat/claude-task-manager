"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelOrderByWithRelationInput_1 = require("../../../inputs/IssueLabelOrderByWithRelationInput");
const IssueLabelWhereInput_1 = require("../../../inputs/IssueLabelWhereInput");
const IssueLabelWhereUniqueInput_1 = require("../../../inputs/IssueLabelWhereUniqueInput");
let AggregateIssueLabelArgs = class AggregateIssueLabelArgs {
};
exports.AggregateIssueLabelArgs = AggregateIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereInput_1.IssueLabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereInput_1.IssueLabelWhereInput)
], AggregateIssueLabelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssueLabelOrderByWithRelationInput_1.IssueLabelOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateIssueLabelArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], AggregateIssueLabelArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIssueLabelArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIssueLabelArgs.prototype, "skip", void 0);
exports.AggregateIssueLabelArgs = AggregateIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateIssueLabelArgs);
