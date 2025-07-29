"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySyncOperationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SyncOperationCreateManyInput_1 = require("../../../inputs/SyncOperationCreateManyInput");
let CreateManySyncOperationArgs = class CreateManySyncOperationArgs {
};
exports.CreateManySyncOperationArgs = CreateManySyncOperationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SyncOperationCreateManyInput_1.SyncOperationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManySyncOperationArgs.prototype, "data", void 0);
exports.CreateManySyncOperationArgs = CreateManySyncOperationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManySyncOperationArgs);
