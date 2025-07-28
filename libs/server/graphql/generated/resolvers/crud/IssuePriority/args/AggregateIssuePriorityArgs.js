"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityOrderByWithRelationInput_1 = require("../../../inputs/IssuePriorityOrderByWithRelationInput");
const IssuePriorityWhereInput_1 = require("../../../inputs/IssuePriorityWhereInput");
const IssuePriorityWhereUniqueInput_1 = require("../../../inputs/IssuePriorityWhereUniqueInput");
let AggregateIssuePriorityArgs = class AggregateIssuePriorityArgs {
};
exports.AggregateIssuePriorityArgs = AggregateIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], AggregateIssuePriorityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityOrderByWithRelationInput_1.IssuePriorityOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateIssuePriorityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], AggregateIssuePriorityArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIssuePriorityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateIssuePriorityArgs.prototype, "skip", void 0);
exports.AggregateIssuePriorityArgs = AggregateIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateIssuePriorityArgs);
