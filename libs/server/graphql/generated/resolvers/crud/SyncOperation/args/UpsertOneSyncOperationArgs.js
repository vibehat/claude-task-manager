"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationCreateInput_1 = require("../../../inputs/SyncOperationCreateInput");
const SyncOperationUpdateInput_1 = require("../../../inputs/SyncOperationUpdateInput");
const SyncOperationWhereUniqueInput_1 = require("../../../inputs/SyncOperationWhereUniqueInput");
let UpsertOneSyncOperationArgs = class UpsertOneSyncOperationArgs {
};
exports.UpsertOneSyncOperationArgs = UpsertOneSyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput)
], UpsertOneSyncOperationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationCreateInput_1.SyncOperationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncOperationCreateInput_1.SyncOperationCreateInput)
], UpsertOneSyncOperationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationUpdateInput_1.SyncOperationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncOperationUpdateInput_1.SyncOperationUpdateInput)
], UpsertOneSyncOperationArgs.prototype, "update", void 0);
exports.UpsertOneSyncOperationArgs = UpsertOneSyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSyncOperationArgs);
