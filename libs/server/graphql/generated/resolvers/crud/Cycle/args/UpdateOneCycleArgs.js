"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleUpdateInput_1 = require("../../../inputs/CycleUpdateInput");
const CycleWhereUniqueInput_1 = require("../../../inputs/CycleWhereUniqueInput");
let UpdateOneCycleArgs = class UpdateOneCycleArgs {
};
exports.UpdateOneCycleArgs = UpdateOneCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateInput_1.CycleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleUpdateInput_1.CycleUpdateInput)
], UpdateOneCycleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereUniqueInput_1.CycleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleWhereUniqueInput_1.CycleWhereUniqueInput)
], UpdateOneCycleArgs.prototype, "where", void 0);
exports.UpdateOneCycleArgs = UpdateOneCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCycleArgs);
