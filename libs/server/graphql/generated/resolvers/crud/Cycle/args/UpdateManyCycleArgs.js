"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCycleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CycleUpdateManyMutationInput_1 = require("../../../inputs/CycleUpdateManyMutationInput");
const CycleWhereInput_1 = require("../../../inputs/CycleWhereInput");
let UpdateManyCycleArgs = class UpdateManyCycleArgs {
};
exports.UpdateManyCycleArgs = UpdateManyCycleArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleUpdateManyMutationInput_1.CycleUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CycleUpdateManyMutationInput_1.CycleUpdateManyMutationInput)
], UpdateManyCycleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CycleWhereInput_1.CycleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CycleWhereInput_1.CycleWhereInput)
], UpdateManyCycleArgs.prototype, "where", void 0);
exports.UpdateManyCycleArgs = UpdateManyCycleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCycleArgs);
