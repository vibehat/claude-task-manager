"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTaskArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaskCreateInput_1 = require("../../../inputs/TaskCreateInput");
let CreateOneTaskArgs = class CreateOneTaskArgs {
};
exports.CreateOneTaskArgs = CreateOneTaskArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaskCreateInput_1.TaskCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TaskCreateInput_1.TaskCreateInput)
], CreateOneTaskArgs.prototype, "data", void 0);
exports.CreateOneTaskArgs = CreateOneTaskArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTaskArgs);
