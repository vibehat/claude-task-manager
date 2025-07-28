"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelUpdateManyMutationInput_1 = require("../../../inputs/IssueLabelUpdateManyMutationInput");
const IssueLabelWhereInput_1 = require("../../../inputs/IssueLabelWhereInput");
let UpdateManyIssueLabelArgs = class UpdateManyIssueLabelArgs {
};
exports.UpdateManyIssueLabelArgs = UpdateManyIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateManyMutationInput_1.IssueLabelUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateManyMutationInput_1.IssueLabelUpdateManyMutationInput)
], UpdateManyIssueLabelArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereInput_1.IssueLabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereInput_1.IssueLabelWhereInput)
], UpdateManyIssueLabelArgs.prototype, "where", void 0);
exports.UpdateManyIssueLabelArgs = UpdateManyIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyIssueLabelArgs);
