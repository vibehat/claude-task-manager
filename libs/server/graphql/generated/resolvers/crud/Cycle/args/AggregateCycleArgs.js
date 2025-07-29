"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleOrderByWithRelationInput_1 = require("../../../inputs/CycleOrderByWithRelationInput");
const CycleWhereInput_1 = require("../../../inputs/CycleWhereInput");
const CycleWhereUniqueInput_1 = require("../../../inputs/CycleWhereUniqueInput");
let AggregateCycleArgs = class AggregateCycleArgs {
};
exports.AggregateCycleArgs = AggregateCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], AggregateCycleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleOrderByWithRelationInput_1.CycleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCycleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], AggregateCycleArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCycleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCycleArgs.prototype, "skip", void 0);
exports.AggregateCycleArgs = AggregateCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCycleArgs);
