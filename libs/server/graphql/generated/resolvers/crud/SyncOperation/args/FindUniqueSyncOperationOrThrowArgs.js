"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSyncOperationOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationWhereUniqueInput_1 = require("../../../inputs/SyncOperationWhereUniqueInput");
let FindUniqueSyncOperationOrThrowArgs = class FindUniqueSyncOperationOrThrowArgs {
};
exports.FindUniqueSyncOperationOrThrowArgs = FindUniqueSyncOperationOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncOperationWhereUniqueInput_1.SyncOperationWhereUniqueInput)
], FindUniqueSyncOperationOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueSyncOperationOrThrowArgs = FindUniqueSyncOperationOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSyncOperationOrThrowArgs);
