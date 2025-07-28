"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictOrderByWithRelationInput_1 = require("../../../inputs/SyncConflictOrderByWithRelationInput");
const SyncConflictWhereInput_1 = require("../../../inputs/SyncConflictWhereInput");
const SyncConflictWhereUniqueInput_1 = require("../../../inputs/SyncConflictWhereUniqueInput");
const SyncConflictScalarFieldEnum_1 = require("../../../../enums/SyncConflictScalarFieldEnum");
let FindManySyncConflictArgs = class FindManySyncConflictArgs {
};
exports.FindManySyncConflictArgs = FindManySyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereInput_1.SyncConflictWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereInput_1.SyncConflictWhereInput)
], FindManySyncConflictArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncConflictOrderByWithRelationInput_1.SyncConflictOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySyncConflictArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput)
], FindManySyncConflictArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySyncConflictArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManySyncConflictArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncConflictScalarFieldEnum_1.SyncConflictScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManySyncConflictArgs.prototype, "distinct", void 0);
exports.FindManySyncConflictArgs = FindManySyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManySyncConflictArgs);
