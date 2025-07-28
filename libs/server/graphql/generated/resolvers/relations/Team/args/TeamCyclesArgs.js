"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCyclesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleOrderByWithRelationInput_1 = require("../../../inputs/CycleOrderByWithRelationInput");
const CycleWhereInput_1 = require("../../../inputs/CycleWhereInput");
const CycleWhereUniqueInput_1 = require("../../../inputs/CycleWhereUniqueInput");
const CycleScalarFieldEnum_1 = require("../../../../enums/CycleScalarFieldEnum");
let TeamCyclesArgs = class TeamCyclesArgs {
};
exports.TeamCyclesArgs = TeamCyclesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], TeamCyclesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleOrderByWithRelationInput_1.CycleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamCyclesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], TeamCyclesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeamCyclesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TeamCyclesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CycleScalarFieldEnum_1.CycleScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TeamCyclesArgs.prototype, "distinct", void 0);
exports.TeamCyclesArgs = TeamCyclesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TeamCyclesArgs);
