"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyIssuePriorityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IssuePriorityCreateManyInput_1 = require("../../../inputs/IssuePriorityCreateManyInput");
let CreateManyIssuePriorityArgs = class CreateManyIssuePriorityArgs {
};
exports.CreateManyIssuePriorityArgs = CreateManyIssuePriorityArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [IssuePriorityCreateManyInput_1.IssuePriorityCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyIssuePriorityArgs.prototype, "data", void 0);
exports.CreateManyIssuePriorityArgs = CreateManyIssuePriorityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyIssuePriorityArgs);
