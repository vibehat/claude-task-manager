"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncOperationAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SyncOperationAvgAggregate = class SyncOperationAvgAggregate {
};
exports.SyncOperationAvgAggregate = SyncOperationAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncOperationAvgAggregate.prototype, "retryCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], SyncOperationAvgAggregate.prototype, "maxRetries", void 0);
exports.SyncOperationAvgAggregate = SyncOperationAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SyncOperationAvgAggregate", {})
], SyncOperationAvgAggregate);
