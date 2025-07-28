"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateManyMutationInput_1 = require("../../../inputs/TaskUpdateManyMutationInput");
const TaskWhereInput_1 = require("../../../inputs/TaskWhereInput");
let UpdateManyTaskArgs = class UpdateManyTaskArgs {
};
exports.UpdateManyTaskArgs = UpdateManyTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateManyMutationInput_1.TaskUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateManyMutationInput_1.TaskUpdateManyMutationInput)
], UpdateManyTaskArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereInput_1.TaskWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaskWhereInput_1.TaskWhereInput)
], UpdateManyTaskArgs.prototype, "where", void 0);
exports.UpdateManyTaskArgs = UpdateManyTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTaskArgs);
