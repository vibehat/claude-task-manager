"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelUpdateInput_1 = require("../../../inputs/IssueLabelUpdateInput");
const IssueLabelWhereUniqueInput_1 = require("../../../inputs/IssueLabelWhereUniqueInput");
let UpdateOneIssueLabelArgs = class UpdateOneIssueLabelArgs {
};
exports.UpdateOneIssueLabelArgs = UpdateOneIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateInput_1.IssueLabelUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateInput_1.IssueLabelUpdateInput)
], UpdateOneIssueLabelArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], UpdateOneIssueLabelArgs.prototype, "where", void 0);
exports.UpdateOneIssueLabelArgs = UpdateOneIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneIssueLabelArgs);
