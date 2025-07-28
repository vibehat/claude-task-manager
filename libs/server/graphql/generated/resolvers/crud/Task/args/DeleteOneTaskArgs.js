"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskWhereUniqueInput_1 = require("../../../inputs/TaskWhereUniqueInput");
let DeleteOneTaskArgs = class DeleteOneTaskArgs {
};
exports.DeleteOneTaskArgs = DeleteOneTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskWhereUniqueInput_1.TaskWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskWhereUniqueInput_1.TaskWhereUniqueInput)
], DeleteOneTaskArgs.prototype, "where", void 0);
exports.DeleteOneTaskArgs = DeleteOneTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTaskArgs);
