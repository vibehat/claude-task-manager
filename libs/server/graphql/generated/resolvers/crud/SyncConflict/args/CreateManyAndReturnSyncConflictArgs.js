"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnSyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictCreateManyInput_1 = require("../../../inputs/SyncConflictCreateManyInput");
let CreateManyAndReturnSyncConflictArgs = class CreateManyAndReturnSyncConflictArgs {
};
exports.CreateManyAndReturnSyncConflictArgs = CreateManyAndReturnSyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncConflictCreateManyInput_1.SyncConflictCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnSyncConflictArgs.prototype, "data", void 0);
exports.CreateManyAndReturnSyncConflictArgs = CreateManyAndReturnSyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnSyncConflictArgs);
