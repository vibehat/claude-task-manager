"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationCreateInput_1 = require("../../../inputs/SyncOperationCreateInput");
let CreateOneSyncOperationArgs = class CreateOneSyncOperationArgs {
};
exports.CreateOneSyncOperationArgs = CreateOneSyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationCreateInput_1.SyncOperationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncOperationCreateInput_1.SyncOperationCreateInput)
], CreateOneSyncOperationArgs.prototype, "data", void 0);
exports.CreateOneSyncOperationArgs = CreateOneSyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneSyncOperationArgs);
