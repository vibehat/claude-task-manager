"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelCreateInput_1 = require("../../../inputs/LabelCreateInput");
let CreateOneLabelArgs = class CreateOneLabelArgs {
};
exports.CreateOneLabelArgs = CreateOneLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelCreateInput_1.LabelCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelCreateInput_1.LabelCreateInput)
], CreateOneLabelArgs.prototype, "data", void 0);
exports.CreateOneLabelArgs = CreateOneLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneLabelArgs);
