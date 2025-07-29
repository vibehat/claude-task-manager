"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleCreateInput_1 = require("../../../inputs/CycleCreateInput");
let CreateOneCycleArgs = class CreateOneCycleArgs {
};
exports.CreateOneCycleArgs = CreateOneCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleCreateInput_1.CycleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleCreateInput_1.CycleCreateInput)
], CreateOneCycleArgs.prototype, "data", void 0);
exports.CreateOneCycleArgs = CreateOneCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCycleArgs);
