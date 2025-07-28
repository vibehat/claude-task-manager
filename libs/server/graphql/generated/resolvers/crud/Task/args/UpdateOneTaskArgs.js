"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskUpdateInput_1 = require("../../../inputs/TaskUpdateInput");
const TaskWhereUniqueInput_1 = require("../../../inputs/TaskWhereUniqueInput");
let UpdateOneTaskArgs = class UpdateOneTaskArgs {
};
exports.UpdateOneTaskArgs = UpdateOneTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskUpdateInput_1.TaskUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskUpdateInput_1.TaskUpdateInput)
], UpdateOneTaskArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], UpdateOneTaskArgs.prototype, "where", void 0);
exports.UpdateOneTaskArgs = UpdateOneTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTaskArgs);
