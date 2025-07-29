"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateInput_1 = require("../../../inputs/CycleCreateInput");
const CycleUpdateInput_1 = require("../../../inputs/CycleUpdateInput");
const CycleWhereUniqueInput_1 = require("../../../inputs/CycleWhereUniqueInput");
let UpsertOneCycleArgs = class UpsertOneCycleArgs {
};
exports.UpsertOneCycleArgs = UpsertOneCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], UpsertOneCycleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateInput_1.CycleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleCreateInput_1.CycleCreateInput)
], UpsertOneCycleArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateInput_1.CycleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleUpdateInput_1.CycleUpdateInput)
], UpsertOneCycleArgs.prototype, "update", void 0);
exports.UpsertOneCycleArgs = UpsertOneCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCycleArgs);
