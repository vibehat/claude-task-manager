"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelOrderByWithRelationInput_1 = require("../../../inputs/LabelOrderByWithRelationInput");
const LabelWhereInput_1 = require("../../../inputs/LabelWhereInput");
const LabelWhereUniqueInput_1 = require("../../../inputs/LabelWhereUniqueInput");
let AggregateLabelArgs = class AggregateLabelArgs {
};
exports.AggregateLabelArgs = AggregateLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], AggregateLabelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LabelOrderByWithRelationInput_1.LabelOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateLabelArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereUniqueInput_1.LabelWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereUniqueInput_1.LabelWhereUniqueInput)
], AggregateLabelArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLabelArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateLabelArgs.prototype, "skip", void 0);
exports.AggregateLabelArgs = AggregateLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateLabelArgs);
