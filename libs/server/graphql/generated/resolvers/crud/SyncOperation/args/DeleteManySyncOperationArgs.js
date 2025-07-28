"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationWhereInput_1 = require("../../../inputs/SyncOperationWhereInput");
let DeleteManySyncOperationArgs = class DeleteManySyncOperationArgs {
};
exports.DeleteManySyncOperationArgs = DeleteManySyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereInput_1.SyncOperationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereInput_1.SyncOperationWhereInput)
], DeleteManySyncOperationArgs.prototype, "where", void 0);
exports.DeleteManySyncOperationArgs = DeleteManySyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySyncOperationArgs);
