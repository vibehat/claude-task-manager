"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneSyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationUpdateInput_1 = require("../../../inputs/SyncOperationUpdateInput");
const SyncOperationWhereUniqueInput_1 = require("../../../inputs/SyncOperationWhereUniqueInput");
let UpdateOneSyncOperationArgs = class UpdateOneSyncOperationArgs {
};
exports.UpdateOneSyncOperationArgs = UpdateOneSyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationUpdateInput_1.SyncOperationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncOperationUpdateInput_1.SyncOperationUpdateInput)
], UpdateOneSyncOperationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput)
], UpdateOneSyncOperationArgs.prototype, "where", void 0);
exports.UpdateOneSyncOperationArgs = UpdateOneSyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneSyncOperationArgs);
