"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSyncConflictOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictOrderByWithRelationInput_1 = require("../../../inputs/SyncConflictOrderByWithRelationInput");
const SyncConflictWhereInput_1 = require("../../../inputs/SyncConflictWhereInput");
const SyncConflictWhereUniqueInput_1 = require("../../../inputs/SyncConflictWhereUniqueInput");
const SyncConflictScalarFieldEnum_1 = require("../../../../enums/SyncConflictScalarFieldEnum");
let FindFirstSyncConflictOrThrowArgs = class FindFirstSyncConflictOrThrowArgs {
};
exports.FindFirstSyncConflictOrThrowArgs = FindFirstSyncConflictOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereInput_1.SyncConflictWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereInput_1.SyncConflictWhereInput)
], FindFirstSyncConflictOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncConflictOrderByWithRelationInput_1.SyncConflictOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSyncConflictOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput)
], FindFirstSyncConflictOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSyncConflictOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstSyncConflictOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncConflictScalarFieldEnum_1.SyncConflictScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstSyncConflictOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstSyncConflictOrThrowArgs = FindFirstSyncConflictOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstSyncConflictOrThrowArgs);
