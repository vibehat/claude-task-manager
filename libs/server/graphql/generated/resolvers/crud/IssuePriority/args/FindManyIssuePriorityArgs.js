"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityOrderByWithRelationInput_1 = require("../../../inputs/IssuePriorityOrderByWithRelationInput");
const IssuePriorityWhereInput_1 = require("../../../inputs/IssuePriorityWhereInput");
const IssuePriorityWhereUniqueInput_1 = require("../../../inputs/IssuePriorityWhereUniqueInput");
const IssuePriorityScalarFieldEnum_1 = require("../../../../enums/IssuePriorityScalarFieldEnum");
let FindManyIssuePriorityArgs = class FindManyIssuePriorityArgs {
};
exports.FindManyIssuePriorityArgs = FindManyIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereInput_1.IssuePriorityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereInput_1.IssuePriorityWhereInput)
], FindManyIssuePriorityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityOrderByWithRelationInput_1.IssuePriorityOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyIssuePriorityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IssuePriorityWhereUniqueInput_1.IssuePriorityWhereUniqueInput)
], FindManyIssuePriorityArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyIssuePriorityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyIssuePriorityArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityScalarFieldEnum_1.IssuePriorityScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyIssuePriorityArgs.prototype, "distinct", void 0);
exports.FindManyIssuePriorityArgs = FindManyIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyIssuePriorityArgs);
