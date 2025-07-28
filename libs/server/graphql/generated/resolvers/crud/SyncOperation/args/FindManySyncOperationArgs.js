"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationOrderByWithRelationInput_1 = require("../../../inputs/SyncOperationOrderByWithRelationInput");
const SyncOperationWhereInput_1 = require("../../../inputs/SyncOperationWhereInput");
const SyncOperationWhereUniqueInput_1 = require("../../../inputs/SyncOperationWhereUniqueInput");
const SyncOperationScalarFieldEnum_1 = require("../../../../enums/SyncOperationScalarFieldEnum");
let FindManySyncOperationArgs = class FindManySyncOperationArgs {
};
exports.FindManySyncOperationArgs = FindManySyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereInput_1.SyncOperationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereInput_1.SyncOperationWhereInput)
], FindManySyncOperationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOperationOrderByWithRelationInput_1.SyncOperationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySyncOperationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput)
], FindManySyncOperationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySyncOperationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySyncOperationArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOperationScalarFieldEnum_1.SyncOperationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySyncOperationArgs.prototype, "distinct", void 0);
exports.FindManySyncOperationArgs = FindManySyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySyncOperationArgs);
