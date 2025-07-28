"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOperationSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncOperationSumAggregate = class SyncOperationSumAggregate {
};
exports.SyncOperationSumAggregate = SyncOperationSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncOperationSumAggregate.prototype, "retryCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncOperationSumAggregate.prototype, "maxRetries", void 0);
exports.SyncOperationSumAggregate = SyncOperationSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncOperationSumAggregate", {})
], SyncOperationSumAggregate);
