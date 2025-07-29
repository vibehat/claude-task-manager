"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationOrderByWithRelationInput_1 = require("../../../inputs/SyncOperationOrderByWithRelationInput");
const SyncOperationWhereInput_1 = require("../../../inputs/SyncOperationWhereInput");
const SyncOperationWhereUniqueInput_1 = require("../../../inputs/SyncOperationWhereUniqueInput");
let AggregateSyncOperationArgs = class AggregateSyncOperationArgs {
};
exports.AggregateSyncOperationArgs = AggregateSyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereInput_1.SyncOperationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereInput_1.SyncOperationWhereInput)
], AggregateSyncOperationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOperationOrderByWithRelationInput_1.SyncOperationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSyncOperationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput)
], AggregateSyncOperationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSyncOperationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSyncOperationArgs.prototype, "skip", void 0);
exports.AggregateSyncOperationArgs = AggregateSyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSyncOperationArgs);
