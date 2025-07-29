"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneIssueLabelArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssueLabelCreateInput_1 = require("../../../inputs/IssueLabelCreateInput");
const IssueLabelUpdateInput_1 = require("../../../inputs/IssueLabelUpdateInput");
const IssueLabelWhereUniqueInput_1 = require("../../../inputs/IssueLabelWhereUniqueInput");
let UpsertOneIssueLabelArgs = class UpsertOneIssueLabelArgs {
};
exports.UpsertOneIssueLabelArgs = UpsertOneIssueLabelArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelWhereUniqueInput_1.IssueLabelWhereUniqueInput)
], UpsertOneIssueLabelArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelCreateInput_1.IssueLabelCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelCreateInput_1.IssueLabelCreateInput)
], UpsertOneIssueLabelArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssueLabelUpdateInput_1.IssueLabelUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", IssueLabelUpdateInput_1.IssueLabelUpdateInput)
], UpsertOneIssueLabelArgs.prototype, "update", void 0);
exports.UpsertOneIssueLabelArgs = UpsertOneIssueLabelArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneIssueLabelArgs);
