"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LabelUpdateManyMutationInput_1 = require("../../../inputs/LabelUpdateManyMutationInput");
const LabelWhereInput_1 = require("../../../inputs/LabelWhereInput");
let UpdateManyLabelArgs = class UpdateManyLabelArgs {
};
exports.UpdateManyLabelArgs = UpdateManyLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelUpdateManyMutationInput_1.LabelUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LabelUpdateManyMutationInput_1.LabelUpdateManyMutationInput)
], UpdateManyLabelArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LabelWhereInput_1.LabelWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LabelWhereInput_1.LabelWhereInput)
], UpdateManyLabelArgs.prototype, "where", void 0);
exports.UpdateManyLabelArgs = UpdateManyLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyLabelArgs);
