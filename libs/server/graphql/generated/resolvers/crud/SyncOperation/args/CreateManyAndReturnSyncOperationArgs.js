"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAndReturnSyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationCreateManyInput_1 = require("../../../inputs/SyncOperationCreateManyInput");
let CreateManyAndReturnSyncOperationArgs = class CreateManyAndReturnSyncOperationArgs {
};
exports.CreateManyAndReturnSyncOperationArgs = CreateManyAndReturnSyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOperationCreateManyInput_1.SyncOperationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAndReturnSyncOperationArgs.prototype, "data", void 0);
exports.CreateManyAndReturnSyncOperationArgs = CreateManyAndReturnSyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAndReturnSyncOperationArgs);
