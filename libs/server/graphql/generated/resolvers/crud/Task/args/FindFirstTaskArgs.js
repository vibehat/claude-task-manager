"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskOrderByWithRelationInput_1 = require("../../../inputs/TaskOrderByWithRelationInput");
const TaskWhereInput_1 = require("../../../inputs/TaskWhereInput");
const TaskWhereUniqueInput_1 = require("../../../inputs/TaskWhereUniqueInput");
const TaskScalarFieldEnum_1 = require("../../../../enums/TaskScalarFieldEnum");
let FindFirstTaskArgs = class FindFirstTaskArgs {
};
exports.FindFirstTaskArgs = FindFirstTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], FindFirstTaskArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskOrderByWithRelationInput_1.TaskOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTaskArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], FindFirstTaskArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTaskArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTaskArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TaskScalarFieldEnum_1.TaskScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTaskArgs.prototype, "distinct", void 0);
exports.FindFirstTaskArgs = FindFirstTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTaskArgs);
