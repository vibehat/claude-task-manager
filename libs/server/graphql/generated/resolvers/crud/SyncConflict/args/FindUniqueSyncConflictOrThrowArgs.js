"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSyncConflictOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictWhereUniqueInput_1 = require("../../../inputs/SyncConflictWhereUniqueInput");
let FindUniqueSyncConflictOrThrowArgs = class FindUniqueSyncConflictOrThrowArgs {
};
exports.FindUniqueSyncConflictOrThrowArgs = FindUniqueSyncConflictOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SyncConflictWhereUniqueInput_1.SyncConflictWhereUniqueInput)
], FindUniqueSyncConflictOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueSyncConflictOrThrowArgs = FindUniqueSyncConflictOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueSyncConflictOrThrowArgs);
