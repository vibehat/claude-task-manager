"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelUpdateInput_1 = require("../../../inputs/LabelUpdateInput");
const LabelWhereUniqueInput_1 = require("../../../inputs/LabelWhereUniqueInput");
let UpdateOneLabelArgs = class UpdateOneLabelArgs {
};
exports.UpdateOneLabelArgs = UpdateOneLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelUpdateInput_1.LabelUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelUpdateInput_1.LabelUpdateInput)
], UpdateOneLabelArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereUniqueInput_1.LabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelWhereUniqueInput_1.LabelWhereUniqueInput)
], UpdateOneLabelArgs.prototype, "where", void 0);
exports.UpdateOneLabelArgs = UpdateOneLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneLabelArgs);
