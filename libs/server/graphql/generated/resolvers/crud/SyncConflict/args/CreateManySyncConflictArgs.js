"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySyncConflictArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncConflictCreateManyInput_1 = require("../../../inputs/SyncConflictCreateManyInput");
let CreateManySyncConflictArgs = class CreateManySyncConflictArgs {
};
exports.CreateManySyncConflictArgs = CreateManySyncConflictArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncConflictCreateManyInput_1.SyncConflictCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySyncConflictArgs.prototype, "data", void 0);
exports.CreateManySyncConflictArgs = CreateManySyncConflictArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySyncConflictArgs);
