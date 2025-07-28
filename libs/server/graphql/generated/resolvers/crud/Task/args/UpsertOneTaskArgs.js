"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateInput_1 = require("../../../inputs/TaskCreateInput");
const TaskUpdateInput_1 = require("../../../inputs/TaskUpdateInput");
const TaskWhereUniqueInput_1 = require("../../../inputs/TaskWhereUniqueInput");
let UpsertOneTaskArgs = class UpsertOneTaskArgs {
};
exports.UpsertOneTaskArgs = UpsertOneTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], UpsertOneTaskArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateInput_1.TaskCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateInput_1.TaskCreateInput)
], UpsertOneTaskArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateInput_1.TaskUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateInput_1.TaskUpdateInput)
], UpsertOneTaskArgs.prototype, "update", void 0);
exports.UpsertOneTaskArgs = UpsertOneTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTaskArgs);
