"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationUpdateManyMutationInput_1 = require("../../../inputs/SyncOperationUpdateManyMutationInput");
const SyncOperationWhereInput_1 = require("../../../inputs/SyncOperationWhereInput");
let UpdateManySyncOperationArgs = class UpdateManySyncOperationArgs {
};
exports.UpdateManySyncOperationArgs = UpdateManySyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationUpdateManyMutationInput_1.SyncOperationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncOperationUpdateManyMutationInput_1.SyncOperationUpdateManyMutationInput)
], UpdateManySyncOperationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereInput_1.SyncOperationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereInput_1.SyncOperationWhereInput)
], UpdateManySyncOperationArgs.prototype, "where", void 0);
exports.UpdateManySyncOperationArgs = UpdateManySyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySyncOperationArgs);
